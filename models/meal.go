package models

type Meal struct {
	ID          uint64 `json:"id" sql:"AUTO_INCREMENT" gorm:"primary key"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Thumbnail   string `json:"thumbnail"`
	Calories    uint64 `json:"calories"`
	MealType    string `json:"meal_type"`
}
