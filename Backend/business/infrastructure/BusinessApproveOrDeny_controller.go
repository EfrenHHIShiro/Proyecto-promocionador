package infrastructure

import (
	"context"
	"net/http"
	"promocionadorApi/business/domain"

	"github.com/labstack/echo/v4"
)

func (h *businessController) BusinessApproveOrDeny(c echo.Context) error {

	object := &domain.BusinessApproveOrDeny{}
	if err := c.Bind(object); err != nil {
		return err
	}

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	if err := h.BusinessRepository.BusinessApproveOrDeny(ctx, object); err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, true)
}
