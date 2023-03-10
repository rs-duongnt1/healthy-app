package db

import (
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"healthy-app.io/models"
)

func NewDB() *gorm.DB {
	dsn := fmt.Sprint(
		"host", "=", os.Getenv("MASTER_POSTGRES_HOST"),
		" ",
		"user", "=", os.Getenv("MASTER_POSTGRES_USER"),
		" ",
		"password", "=", os.Getenv("MASTER_POSTGRES_PASSWORD"),
		" ",
		"dbname", "=", os.Getenv("MASTER_POSTGRES_DB"),
		" ",
		"port", "=", os.Getenv("MASTER_POSTGRES_PORT"),
	)

	fmt.Println(dsn)
	myLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags),
		logger.Config{
			SlowThreshold:             time.Second,
			LogLevel:                  logger.Info,
			IgnoreRecordNotFoundError: true,
			Colorful:                  true,
		},
	)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: myLogger,
	})

	if err != nil {
		panic("Connect database failed")
	} else {
		db.AutoMigrate(&models.User{})
		db.AutoMigrate(&models.Meal{})
		db.AutoMigrate(&models.MealLog{})
		db.AutoMigrate(&models.Exercise{})
		db.AutoMigrate(&models.ExerciceLog{})
		db.AutoMigrate(&models.BodyRecord{})
		db.AutoMigrate(&models.Diary{})
	}

	return db
}
