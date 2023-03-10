package service

import (
	"healthy-app.io/internal/repository"
	"healthy-app.io/models"
)

type DiaryService struct {
	diaryRepository repository.DiaryRepository
}

type DiarySearchParams struct {
	Page int `json:"page"`
}

func InitDiaryService(DiaryRepository *repository.DiaryRepository) *DiaryService {
	repository := &DiaryService{
		diaryRepository: *DiaryRepository,
	}
	return repository
}

func (c DiaryService) FindDiary(searchParams DiarySearchParams) ([]models.Diary, int64, error) {
	var diaries []models.Diary
	var total int64
	err, total := c.diaryRepository.FindDiaries(&diaries, total, searchParams.Page)
	if err != nil {
		return nil, 0, err
	}
	return diaries, total, nil
}
