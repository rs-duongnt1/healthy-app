package controller

import (
	"math"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"healthy-app.io/constant"
	httpResponse "healthy-app.io/http/response"
	"healthy-app.io/internal/service"
)

type ExerciseController struct {
	ExerciseService service.ExerciseService
}

func InitExerciseController(r *gin.RouterGroup, ExerciseService *service.ExerciseService) {
	controller := &ExerciseController{
		ExerciseService: *ExerciseService,
	}
	ExerciseRoutes := r.Group("exercises")
	ExerciseRoutes.GET("", controller.ListExercises)
}

func (c ExerciseController) ListExercises(context *gin.Context) {
	// categoryId, categoryIdParamErr := strconv.ParseUint(context.Query("category_id"), 10, 64)
	page, pageparamErr := strconv.Atoi(context.Query("page"))
	searchParams := service.ExerciseSearchParams{}

	if pageparamErr == nil {
		searchParams.Page = page
	}
	exercises, total, err := c.ExerciseService.FindExercise(searchParams)

	if err != nil {
		httpResponse.Error(context, http.StatusOK, err)
		return
	}
	httpResponse.JSON(context, http.StatusOK, gin.H{
		"Exercises": exercises,
		"total":     total,
		"last_page": int(math.Ceil(float64(total) / float64(constant.PAGINATION_LIMIT))),
	})
}
