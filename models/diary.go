package models

import "time"

type Diary struct {
	ID    uint64    `json:"id" sql:"AUTO_INCREMENT"`
	Notes string    `json:"notes"`
	Date  time.Time `gorm:"default:CURRENT_TIMESTAMP"`
}
