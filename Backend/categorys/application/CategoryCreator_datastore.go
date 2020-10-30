package application

import (
	"context"
	"promocionadorApi/categorys/domain"
	"promocionadorApi/config/database"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (r *categoryRepository) CategoryCreator(ctx context.Context, object *domain.Category) error {

	result, err := r.db.Collection(database.CCategory).InsertOne(ctx, object)
	if err != nil {
		return err
	}
	object.ID = result.InsertedID.(primitive.ObjectID)
	return nil
}
