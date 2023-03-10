package http

import (
	"time"

	"github.com/gin-gonic/gin"
)

type SuccessResponse struct {
	StatusCode int         `json:"status_code"`
	Timestamp  time.Time   `json:"timestamp"`
	Data       interface{} `json:"data"`
}

type ErrorResponse struct {
	StatusCode int       `json:"status_code"`
	Timestamp  time.Time `json:"timestamp"`
	Error      string    `json:"error"`
}

func JSON(ctx *gin.Context, statusCode int, data interface{}) {
	result := SuccessResponse{}
	result.StatusCode = statusCode
	result.Timestamp = time.Now()
	result.Data = data
	ctx.JSON(statusCode, result)
}

func Error(ctx *gin.Context, statusCode int, err error) {
	result := ErrorResponse{}
	result.StatusCode = statusCode
	result.Timestamp = time.Now()
	result.Error = err.Error()
	ctx.JSON(statusCode, result)
}
