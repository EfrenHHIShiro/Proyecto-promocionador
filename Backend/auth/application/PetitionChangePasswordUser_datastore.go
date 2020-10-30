package application

import (
	"context"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"

	"go.mongodb.org/mongo-driver/bson"
)

func (r *authRepository) PetitionChangePasswordUser(ctx context.Context, object *domain.PetitionChangePasswordUser) error {

	if err := r.db.Collection(database.CUser).FindOne(ctx, bson.M{"email": object.Email}).Decode(&object); err != nil {
		return err
	}

	// object.IdEncrypt := helpers.Encrypt(strconv.Itoa(object.ID))

	// templateData := struct {
	// 	Name string
	// 	URL  string
	// }{
	// 	Name: email.Firstname,
	// 	URL:  "http://127.0.0.1:3000/auth/changepassword/" + hash,
	// }
	// subject := "Recovery Password"
	// request := helper.NewRequest([]string{email.Email}, subject)

	// if _, err := request.Send("./helper/templates/templateRecoveryPassword.html", templateData); err != nil {
	// 	return false, err
	// }

	return nil
}
