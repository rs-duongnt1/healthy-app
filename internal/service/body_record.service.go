package service

import (
	"healthy-app.io/internal/repository"
	"healthy-app.io/models"
)

type BodyRecordService struct {
	BodyRecordRepository repository.BodyRecordRepository
}

type BodyRecordSearchParams struct {
	Page int `json:"page"`
}

func InitBodyRecordService(bodyRecordRepository *repository.BodyRecordRepository) *BodyRecordService {
	repository := &BodyRecordService{
		BodyRecordRepository: *bodyRecordRepository,
	}
	return repository
}

func (c BodyRecordService) FindBodyRecord(searchParams BodyRecordSearchParams) ([]models.BodyRecord, int64, error) {
	var bodyRecords []models.BodyRecord
	var total int64
	err, total := c.BodyRecordRepository.FindBodyRecords(&bodyRecords, total, searchParams.Page)
	if err != nil {
		return nil, 0, err
	}
	return bodyRecords, total, nil
}
