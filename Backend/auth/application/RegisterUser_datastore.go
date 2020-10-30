package application

import (
	"context"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (r *authRepository) RegisterUser(ctx context.Context, object *domain.RegisterUser) error {

	object.HashPassword()
	result, err := r.db.Collection(database.CUser).InsertOne(ctx, object)
	if err != nil {
		return err
	}
	object.ID = result.InsertedID.(primitive.ObjectID)

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
