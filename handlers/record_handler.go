package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type RecordHandler struct {
	db *gorm.DB
}

func NewRecordHandler(db *gorm.DB) *RecordHandler {
	return &RecordHandler{
		db: db,
	}
}

func (e RecordHandler) RecordList(ctx *gin.Context) {

	ctx.JSON(http.StatusOK, gin.H{
		"message": "success",
	})
}
