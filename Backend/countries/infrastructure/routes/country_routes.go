package routes

import (
	"promocionadorApi/config/controller"

	"github.com/labstack/echo/v4"
)

func MakeCountryRoutes(r *echo.Echo, c controller.AppController) {
	r.POST("country/CountryCreate/", c.CountryCreator)
	r.DELETE("country/CountryDelete/:id", c.CountryDelete)
	r.GET("country/CountryGetAll/", c.CountryGetAll)
	r.PUT("country/CountryUpdate/", c.CountryUpdate)
	r.POST("country/StateCreate/", c.StateCreator)
	r.POST("country/StateDelete/", c.StateDelete)
	r.POST("country/StateUpdate/", c.StateUpdate)
}
