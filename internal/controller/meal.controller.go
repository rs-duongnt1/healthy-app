package controller

import (
	"math"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"healthy-app.io/constant"
	httpResponse "healthy-app.io/http/response"
	"healthy-app.io/internal/service"
	"healthy-app.io/models"
)

type MealController struct {
	mealService service.MealService
}

type CreateMealRequest struct {
	Name     string `json:"name"`
	MealType string `json:"meal_type"`
	Calories uint64 `json:"calories"`
}

func InitMealController(r *gin.RouterGroup, mealService *service.MealService) {
	controller := &MealController{
		mealService: *mealService,
	}
	mealRoutes := r.Group("meals")
	mealRoutes.GET("logs", controller.ListMealLogs)
	mealRoutes.POST("", controller.CreateMeal)
}

func (c MealController) ListMealLogs(context *gin.Context) {
	page, pageparamErr := strconv.Atoi(context.Query("page"))
	mealType := context.Query("meal_type")
	searchParams := service.MealSearchParams{}
	if pageparamErr == nil {
		searchParams.Page = page
	}

	if mealType != "" {
		searchParams.MealType = mealType
	}
	mealLogs, total, err := c.mealService.FindMealLogs(searchParams)

	if err != nil {
		httpResponse.Error(context, http.StatusOK, err)
		return
	}
	// sleep test
	time.Sleep(1 * time.Second)
	httpResponse.JSON(context, http.StatusOK, gin.H{
		"meal_logs": mealLogs,
		"total":     total,
		"per_page":  constant.PAGINATION_LIMIT,
		"last_page": int(math.Ceil(float64(total) / float64(constant.PAGINATION_LIMIT))),
	})
}

func (c MealController) CreateMeal(context *gin.Context) {
	var body CreateMealRequest
	context.ShouldBindJSON(&body)
	meal, _ := c.mealService.CreateMeal(&models.Meal{
		Name:     body.Name,
		MealType: body.MealType,
		Calories: body.Calories,
	})
	httpResponse.JSON(context, http.StatusOK, meal)
}
