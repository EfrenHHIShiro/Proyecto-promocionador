package infrastructure

import (
	"context"
	"net/http"

	"github.com/labstack/echo/v4"
)

func (h *categoryController) CategoryDelete(c echo.Context) error {
	id := c.Param("id")

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	if err := h.CategoryRepository.CategoryDelete(ctx, id); err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, true)
}
