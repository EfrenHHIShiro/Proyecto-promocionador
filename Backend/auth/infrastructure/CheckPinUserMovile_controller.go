package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/auth/domain"

	"github.com/labstack/echo/v4"
)

func (h *authController) CheckPinUserMovile(c echo.Context) error {

	object := &domain.CheckUserAccount{}
	if err := c.Bind(object); err != nil {
		return err
	}
	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	if err := h.AuthRepository.CheckPinUserMovile(ctx, object); err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, true)

}
