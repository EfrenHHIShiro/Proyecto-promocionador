package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/auth/domain"

	"github.com/labstack/echo/v4"
)

func (h *authController) PetitionChangePasswordUser(c echo.Context) error {
	object := &domain.PetitionChangePasswordUser{}

	if err := c.Bind(object); err != nil {
		return err
	}

	if object.Email == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	}

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	err := h.AuthRepository.PetitionChangePasswordUser(ctx, object)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, true)
}
