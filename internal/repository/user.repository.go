package repository

import (
	"gorm.io/gorm"
	"healthy-app.io/constant"
	"healthy-app.io/models"
)

type UserRepository struct {
	db *gorm.DB
}

func InitUserRepository(db *gorm.DB) *UserRepository {
	repository := &UserRepository{
		db: db,
	}
	return repository
}

func (c UserRepository) FindUsers(users *[]models.User, total int64, page int) (error, int64) {
	offset := (page - 1) * constant.PAGINATION_LIMIT
	result := c.db.Where(&models.User{}).Offset(offset).Limit(constant.PAGINATION_LIMIT).Find(&users)
	c.db.Model(&models.User{}).Count(&total)
	if result.Error != nil {
		return result.Error, 0
	}
	return nil, total
}

func (c UserRepository) CreateUser(user *models.User) error {
	result := c.db.Create(&user)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
