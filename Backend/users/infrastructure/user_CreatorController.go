package infrastructure

import (
	"context"
	"net/http"

	"github.com/labstack/echo/v4"
)

func (h *userController) UserCreator(c echo.Context) error {
	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	result, err := h.UserRepository.UserCreator(ctx)
	if err != nil {
		return echo.NewHTTPError(http.StatusNotFound, result)
	}

	return c.JSON(http.StatusOK, result)
}
