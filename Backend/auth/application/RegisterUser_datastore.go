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

	return nil
}
