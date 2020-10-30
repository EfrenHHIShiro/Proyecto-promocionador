package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/auth/domain"

	"github.com/labstack/echo/v4"
)

func (h *authController) ChangePasswordUser(c echo.Context) error {
	object := &domain.ChangePasswordUser{}

	if err := c.Bind(object); err != nil {
		return err
	}

	if object.IdEncrypt == "" || object.Password == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	}

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	err := h.AuthRepository.ChangePasswordUser(ctx, object)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, true)
}
