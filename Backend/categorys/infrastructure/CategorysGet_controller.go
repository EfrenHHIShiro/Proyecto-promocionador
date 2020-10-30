package infrastructure

import (
	"context"
	"net/http"

	"github.com/labstack/echo/v4"
)

func (h *categoryController) CategorysGet(c echo.Context) error {
	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	result, err := h.CategoryRepository.CategorysGet(ctx)
	if err != nil {
		return echo.NewHTTPError(http.StatusNotFound, err)
	}

	return c.JSON(http.StatusOK, result)
}
