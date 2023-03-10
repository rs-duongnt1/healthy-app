package service

import (
	"healthy-app.io/internal/repository"
	"healthy-app.io/models"
)

type ExerciseService struct {
	ExerciseRepository repository.ExerciseRepository
}

type ExerciseSearchParams struct {
	Page int `json:"page"`
}

func InitExerciseService(exerciseRepository *repository.ExerciseRepository) *ExerciseService {
	repository := &ExerciseService{
		ExerciseRepository: *exerciseRepository,
	}
	return repository
}

func (c ExerciseService) FindExercise(searchParams ExerciseSearchParams) ([]models.Exercise, int64, error) {
	var exercises []models.Exercise
	var total int64
	err, total := c.ExerciseRepository.FindExercises(&exercises, total, searchParams.Page)
	if err != nil {
		return nil, 0, err
	}
	return exercises, total, nil
}
