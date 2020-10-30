package application

import (
	"context"
	"promocionadorApi/auth/domain"
	"promocionadorApi/config/database"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (r *authRepository) ActiveUserAccount(ctx context.Context, id string) error {

	userAccount := &domain.ActiveUserAccount{
		Status: true,
	}

	update := bson.M{
		"$set": userAccount,
	}

	objID, _ := primitive.ObjectIDFromHex(id)

	if err := r.db.Collection(database.CUser).FindOneAndUpdate(ctx, bson.M{"_id": objID}, update).Err(); err != nil {
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
