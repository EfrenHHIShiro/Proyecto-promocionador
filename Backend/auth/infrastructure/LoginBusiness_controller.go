package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/auth/domain"

	"github.com/labstack/echo/v4"
)

func (h *authController) LoginBusiness(c echo.Context) error {
	object := &domain.LoginBusiness{}

	if err := c.Bind(object); err != nil {
		return err
	}

	// if login.Email == "" || login.Password == "" {
	// 	return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	// }

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	result, err := h.AuthRepository.LoginBusiness(ctx, object)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, result)
}
