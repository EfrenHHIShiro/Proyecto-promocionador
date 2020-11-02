package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/auth/domain"

	"github.com/labstack/echo/v4"
)

func (h *authController) LoginUser(c echo.Context) error {
	object := &domain.LoginUser{}

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

	result, err := h.AuthRepository.LoginUser(ctx, object)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, result)
}
