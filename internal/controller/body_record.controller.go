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

type BodyRecordController struct {
	BodyRecordService service.BodyRecordService
}

func InitBodyRecordController(r *gin.RouterGroup, BodyRecordService *service.BodyRecordService) {
	controller := &BodyRecordController{
		BodyRecordService: *BodyRecordService,
	}
	bodyRecordRoutes := r.Group("body-records")
	bodyRecordRoutes.GET("", controller.ListBodyRecords)
}

func (c BodyRecordController) ListBodyRecords(context *gin.Context) {
	// categoryId, categoryIdParamErr := strconv.ParseUint(context.Query("category_id"), 10, 64)
	page, pageparamErr := strconv.Atoi(context.Query("page"))
	searchParams := service.BodyRecordSearchParams{}

	if pageparamErr == nil {
		searchParams.Page = page
	}
	bodyRecords, total, err := c.BodyRecordService.FindBodyRecord(searchParams)

	if err != nil {
		httpResponse.Error(context, http.StatusOK, err)
		return
	}
	httpResponse.JSON(context, http.StatusOK, gin.H{
		"body_records": bodyRecords,
		"total":        total,
		"last_page":    int(math.Ceil(float64(total) / float64(constant.PAGINATION_LIMIT))),
	})
}
