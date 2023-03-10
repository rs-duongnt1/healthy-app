package models

type Exercise struct {
	ID                      uint64 `json:"id" sql:"AUTO_INCREMENT" gorm:"primary key"`
	Name                    string `json:"name"`
	Description             string `json:"description"`
	CaloriesBurnedPerMinute int    `json:"calories_burned_per_minute"`
	ExerciseLog             ExerciceLog
}
