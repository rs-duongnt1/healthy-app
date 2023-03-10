package controller

import (
	"math"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"healthy-app.io/constant"
	httpResponse "healthy-app.io/http/response"
	"healthy-app.io/internal/service"
)

type UserController struct {
	userService service.UserService
}

func InitUserController(r *gin.RouterGroup, userService *service.UserService) {
	controller := &UserController{
		userService: *userService,
	}
	UserRoutes := r.Group("users")
	UserRoutes.GET("", controller.ListUsers)
}

func (c UserController) ListUsers(context *gin.Context) {
	// categoryId, categoryIdParamErr := strconv.ParseUint(context.Query("category_id"), 10, 64)
	page, pageparamErr := strconv.Atoi(context.Query("page"))
	searchParams := service.UserSearchParams{}

	if pageparamErr == nil {
		searchParams.Page = page
	}
	Users, total, err := c.userService.FindUser(searchParams)

	if err != nil {
		httpResponse.Error(context, http.StatusOK, err)
		return
	}
	httpResponse.JSON(context, http.StatusOK, gin.H{
		"Users":     Users,
		"total":     total,
		"last_page": int(math.Ceil(float64(total) / float64(constant.PAGINATION_LIMIT))),
	})
}
