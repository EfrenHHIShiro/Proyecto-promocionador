package application

import (
	"context"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"
)

func (r *authRepository) RegisterUser(ctx context.Context, objeto *domain.RegisterUser) error {

	objeto.HashPassword()
	_, err := r.db.Collection(database.CUser).InsertOne(ctx, objeto)
	if err != nil {
		return err
	}

	// send email to create password personal.
	// useridencript := helpers.Encrypt(strconv.Itoa())

	// templateData := struct {
	// 	Name  string
	// 	Email string
	// 	URL   string
	// }{
	// 	Name:  user.Resourcedata.Firstname,
	// 	Email: user.Resourcedata.Personalemail,
	// 	URL:   "http://localhost:3000/auth/verify+account/" + useridencript,
	// }
	// subject := "Welcome to GrupoGIT"
	// request := helper.NewRequest([]string{user.Resourcedata.Personalemail}, subject)
	// if _, err := request.Send("./helper/templates/templateVerifyAccount.html", templateData); err != nil {
	// 	tx.Rollback()
	// 	return false, err
	// }

	return nil
}
