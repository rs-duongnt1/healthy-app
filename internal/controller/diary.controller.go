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

type DiaryController struct {
	diaryService service.DiaryService
}

func InitDiaryController(r *gin.RouterGroup, diaryService *service.DiaryService) {
	controller := &DiaryController{
		diaryService: *diaryService,
	}
	DiaryRoutes := r.Group("diaries")
	DiaryRoutes.GET("", controller.ListDiaries)
}

func (c DiaryController) ListDiaries(context *gin.Context) {
	// categoryId, categoryIdParamErr := strconv.ParseUint(context.Query("category_id"), 10, 64)
	page, pageparamErr := strconv.Atoi(context.Query("page"))
	searchParams := service.DiarySearchParams{}

	if pageparamErr == nil {
		searchParams.Page = page
	}
	diaries, total, err := c.diaryService.FindDiary(searchParams)

	if err != nil {
		httpResponse.Error(context, http.StatusOK, err)
		return
	}
	httpResponse.JSON(context, http.StatusOK, gin.H{
		"diaries":   diaries,
		"total":     total,
		"last_page": int(math.Ceil(float64(total) / float64(constant.PAGINATION_LIMIT))),
	})
}
