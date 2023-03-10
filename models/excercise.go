package models

import "time"

type Excercise struct {
	ID        uint64    `json:"id" sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Title     string    `json:"title"`
	Kcal      int8      `json:"kcal"`
	Time      uint8     `json:"time"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
	UpdatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP()"`
}
