package repository

import (
	"gorm.io/gorm"
	"healthy-app.io/constant"
	"healthy-app.io/models"
)

type BodyRecordRepository struct {
	db *gorm.DB
}

func InitBodyRecordRepository(db *gorm.DB) *BodyRecordRepository {
	repository := &BodyRecordRepository{
		db: db,
	}
	return repository
}

func (c BodyRecordRepository) FindBodyRecords(bodyRecords *[]models.BodyRecord, total int64, page int) (error, int64) {
	offset := (page - 1) * constant.PAGINATION_LIMIT
	result := c.db.Where(&models.BodyRecord{}).Offset(offset).Limit(constant.PAGINATION_LIMIT).Find(&bodyRecords)
	c.db.Model(&models.BodyRecord{}).Count(&total)
	if result.Error != nil {
		return result.Error, 0
	}
	return nil, total
}

func (c BodyRecordRepository) CreateBodyRecord(bodyRecord *models.BodyRecord) error {
	result := c.db.Create(&bodyRecord)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
