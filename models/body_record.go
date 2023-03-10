package models

import "time"

type BodyRecord struct {
	ID     uint64    `json:"id" sql:"AUTO_INCREMENT" gorm:"primary key"`
	UserID uint64    `json:"user_id"`
	Weight float32   `json:"weight"`
	Height float32   `json:"height"`
	Date   time.Time `json:"date"`
}
