package service

import (
	"healthy-app.io/internal/repository"
	"healthy-app.io/models"
)

type UserService struct {
	userRepository repository.UserRepository
}

type UserSearchParams struct {
	Page int `json:"page"`
}

func InitUserService(userRepository *repository.UserRepository) *UserService {
	repository := &UserService{
		userRepository: *userRepository,
	}
	return repository
}

func (c UserService) FindUser(searchParams UserSearchParams) ([]models.User, int64, error) {
	var users []models.User
	var total int64
	err, total := c.userRepository.FindUsers(&users, total, searchParams.Page)
	if err != nil {
		return nil, 0, err
	}
	return users, total, nil
}
