package service

import (
	"healthy-app.io/internal/repository"
	"healthy-app.io/models"
)

type MealService struct {
	mealRepository repository.MealRepository
}

type MealSearchParams struct {
	Page     int    `json:"page"`
	MealType string `json:"meal_type"`
}

func InitMealService(mealRepository *repository.MealRepository) *MealService {
	repository := &MealService{
		mealRepository: *mealRepository,
	}
	return repository
}

func (c MealService) FindMealLogs(searchParams MealSearchParams) ([]models.MealLog, int64, error) {
	var meals []models.MealLog
	var total int64
	err, total := c.mealRepository.FindMealLogs(&meals, total, searchParams.Page, searchParams.MealType)
	if err != nil {
		return nil, 0, err
	}
	return meals, total, nil
}

func (c MealService) CreateMeal(meal *models.Meal) (*models.Meal, error) {
	err := c.mealRepository.CreateMeal(meal)
	if err != nil {
		return nil, err
	}
	return meal, nil
}
