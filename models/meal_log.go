package models

import "time"

type MealLog struct {
	ID     uint64    `json:"id" sql:"AUTO_INCREMENT" gorm:"primary key"`
	UserID uint64    `json:"user_id"`
	MealID uint64    `json:"meal_id"`
	Date   time.Time `json:"date" gorm:"default:CURRENT_TIMESTAMP"`
	Meal   Meal      `json:"meal"`
}
