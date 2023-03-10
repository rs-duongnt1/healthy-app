package models

import "time"

type Diary struct {
	ID          uint64    `json:"id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Title       string    `json:"title"`
	Description int8      `json:"kcal"`
	CreatedAt   time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
	UpdatedAt   time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
}
