package main

// https://github.com/kecci/goscription/blob/master/app/cmd/http.go

import (
	"context"
	"fmt"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.uber.org/fx"
	"gorm.io/gorm"
	"healthy-app.io/db"
	"healthy-app.io/internal/controller"
	"healthy-app.io/internal/repository"
	"healthy-app.io/internal/service"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	fx.New(
		fx.Options(
			fx.Provide(NewDB),
			fx.Provide(NewGin),
			repository.Module,
			controller.Module,
			service.Module,
		),
	).Run()
}

func NewDB(lc fx.Lifecycle) *gorm.DB {
	return db.NewDB()
}

// func NewRecordHandler(lc fx.Lifecycle, db *gorm.DB) *handlers.RecordHandler {

// }

func NewGin(lc fx.Lifecycle, db *gorm.DB) *gin.RouterGroup {
	r := gin.Default()
	r.Use(cors.Default())
	apiRoute := r.Group("api")
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
	return apiRoute
}
