package main

// https://github.com/kecci/goscription/blob/master/app/cmd/http.go

import (
	"context"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.uber.org/fx"
	"gorm.io/gorm"
	"healthy-app.io/db"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	fx.New(
		fx.Options(
			fx.Invoke()
		),
		fx.Provide(NewDB),
		fx.Invoke(NewGin),
	).Run()
}

func NewDB(lc fx.Lifecycle) *gorm.DB {
	return db.NewDB()
}

// func NewRecordHandler(lc fx.Lifecycle, db *gorm.DB) *handlers.RecordHandler {

// }

func NewGin(lc fx.Lifecycle, db *gorm.DB) *gin.Engine {
	r := gin.Default()
	lc.Append(fx.Hook{
		OnStart: func(context.Context) error {
			fmt.Print("Starting Gin server.")
			// apiRoutes := r.Group("api")
			// apiRoutes.GET("records", handlers.RecordHandler)
			go r.Run(":8080")
			return nil
		},
		OnStop: func(ctx context.Context) error {
			fmt.Print("Stopping Gin server")
			return nil
		},
	})
	return r
}
