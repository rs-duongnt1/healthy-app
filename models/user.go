package models

type User struct {
	ID       uint64 `json:"id" sql:"AUTO_INCREMENT" gorm:"primary key"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Age      int    `json:"age"`
	Weight   int    `json:"weight"`
	Height   int    `json:"height"`
	Gender   string `json:"gender"`
}
