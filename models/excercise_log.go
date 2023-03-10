package models

import "time"

type ExerciceLog struct {
	ID              uint64    `json:"id" sql:"AUTO_INCREMENT" gorm:"primary key"`
	UserID          uint64    `json:"user_id"`
	ExcerciseID     uint64    `json:"excercise_id"`
	DurationMinutes int       `json:"duration_minutes"`
	Date            time.Time `json:"date"`
}
