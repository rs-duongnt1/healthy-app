package models

import "time"

type RecipeCategory struct {
	ID        uint64    `json:"id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Name      string    `json:"name"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
	UpdatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
}
