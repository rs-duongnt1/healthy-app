package models

import "time"

type Recipe struct {
	ID          uint64      `json:"id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	CategoryID  uint64      `json:"category_id"`
	Title       string      `json:"title"`
	Description string      `json:"description"`
	Tags        interface{} `json:"tags" gorm:"type:json"`
	CreatedAt   time.Time   `gorm:"default:CURRENT_TIMESTAMP()"`
	UpdatedAt   time.Time   `gorm:"default:CURRENT_TIMESTAMP()"`
}
