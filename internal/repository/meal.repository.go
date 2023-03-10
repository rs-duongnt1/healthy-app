package repository

import (
	"gorm.io/gorm"
	"healthy-app.io/constant"
	"healthy-app.io/models"
)

type MealRepository struct {
	db *gorm.DB
}

func InitMealRepository(db *gorm.DB) *MealRepository {
	repository := &MealRepository{
		db: db,
	}
	return repository
}

func (c MealRepository) FindMealLogs(meals *[]models.MealLog, total int64, page int, mealType string) (error, int64) {
	offset := (page - 1) * constant.PAGINATION_LIMIT

	queryBuilder := c.db.Where(&models.MealLog{})

	if mealType != "" {
		var mealsByType []models.Meal
		c.db.Where(&models.Meal{
			MealType: mealType,
		}).Find(&mealsByType)
		var mealIds []uint64
		for _, meal := range mealsByType {
			mealIds = append(mealIds, meal.ID)
		}
		queryBuilder = queryBuilder.Where("meal_id IN ?", mealIds)
	}

	result := queryBuilder.Offset(offset).Limit(constant.PAGINATION_LIMIT).Preload("Meal").Find(&meals)
	queryBuilder.Count(&total)
	if result.Error != nil {
		return result.Error, 0
	}
	return nil, total
}

func (c MealRepository) CreateMeal(meal *models.Meal) error {
	result := c.db.Create(&meal)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
