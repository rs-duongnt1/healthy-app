package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type RecipeController struct {
	db *gorm.DB
}

func InitRecipeController(r *gin.Engine) {
	controller := &RecipeController{}
	r.GET("/recipes", controller.ListRecipe)
}

func (c RecipeController) ListRecipe(context *gin.Context) {
	context.JSON(http.StatusOK, gin.H{
		"success": true,
	})
}
