package infrastructure

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"promocionadorApi/auth/domain"

	"github.com/labstack/echo/v4"
)

func (h *authController) RegisterBusiness(c echo.Context) error {
	// image, _ := c.FormFile("file")
	data := c.FormValue("data")

	object := &domain.RegisterBusiness{}
	err := json.Unmarshal([]byte(data), object)
	if err != nil {
		fmt.Println(err)
	}

	// var str string
	// if image != nil {
	// 	str, err = helper.Upload(image)
	// 	object.Resourcedata.Photouser = str
	// 	if err != nil {
	// 		return err
	// 	}
	// }

	// if object.Email == "" ||
	// 	object.Roleid == 0 ||
	// 	object.Resourcedata.Firstname == "" ||
	// 	object.Resourcedata.Lastname == "" ||
	// 	object.Resourcedata.Personalemail == "" {
	// 	return echo.NewHTTPError(http.StatusBadRequest, "Syntax error of sent json")
	// }

	ctx := c.Request().Context()
	if ctx == nil {
		ctx = context.Background()
	}

	err = h.AuthRepository.RegisterBusiness(ctx, object)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusCreated, object)
}
