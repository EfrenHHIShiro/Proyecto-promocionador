package routes

import (
	"promocionadorApi/config/controller"

	"github.com/labstack/echo/v4"
)

func MakeBusinessRoutes(r *echo.Echo, c controller.AppController) {
	r.POST("business/BusinessGetByCategory/", c.BusinessGetByCategory)
	r.GET("business/BusinessGetById/:id", c.BusinessGetById)
	r.PUT("business/BusinessApproveOrDeny/", c.BusinessApproveOrDeny)
	// r.DELETE("category/CategoryDelete/:id", c.CategoryDelete)
}
