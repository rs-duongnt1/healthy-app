package models

import "time"

type Diary struct {
	ID     uint64    `json:"id" sql:"AUTO_INCREMENT"`
	UserID uint64    `json:"user_id"`
	Notes  string    `json:"notes"`
	Date   time.Time `gorm:"default:CURRENT_TIMESTAMP"`
}
