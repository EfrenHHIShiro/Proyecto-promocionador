package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/auth/domain"

	"github.com/labstack/echo/v4"
)

func (h *authController) RegisterUser(c echo.Context) error {

	object := &domain.RegisterUser{
		Status: false,
	}

	if err := c.Bind(object); err != nil {
		return err
	}

	if object.Email == "" || object.Password == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	}

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	if err := h.AuthRepository.RegisterUser(ctx, object); err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, true)
}
