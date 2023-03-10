package repository

import (
	"gorm.io/gorm"
	"healthy-app.io/constant"
	"healthy-app.io/models"
)

type DiaryRepository struct {
	db *gorm.DB
}

func InitDiaryRepository(db *gorm.DB) *DiaryRepository {
	repository := &DiaryRepository{
		db: db,
	}
	return repository
}

func (c DiaryRepository) FindDiaries(diaries *[]models.Diary, total int64, page int) (error, int64) {
	offset := (page - 1) * constant.PAGINATION_LIMIT
	result := c.db.Where(&models.Diary{}).Offset(offset).Limit(constant.PAGINATION_LIMIT).Find(&diaries)
	c.db.Model(&models.Diary{}).Count(&total)
	if result.Error != nil {
		return result.Error, 0
	}
	return nil, total
}

func (c DiaryRepository) CreateDiary(diary *models.Diary) error {
	result := c.db.Create(&diary)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
