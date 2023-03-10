package repository

import (
	"gorm.io/gorm"
	"healthy-app.io/constant"
	"healthy-app.io/models"
)

type ExerciseRepository struct {
	db *gorm.DB
}

func InitExerciseRepository(db *gorm.DB) *ExerciseRepository {
	repository := &ExerciseRepository{
		db: db,
	}
	return repository
}

func (c ExerciseRepository) FindExercises(excercises *[]models.Exercise, total int64, page int) (error, int64) {
	offset := (page - 1) * constant.PAGINATION_LIMIT
	result := c.db.Where(&models.Exercise{}).Offset(offset).Limit(constant.PAGINATION_LIMIT).Find(&excercises)
	c.db.Model(&models.Exercise{}).Count(&total)
	if result.Error != nil {
		return result.Error, 0
	}
	return nil, total
}

func (c ExerciseRepository) CreateExcercise(excercise *models.Meal) error {
	result := c.db.Create(&excercise)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
