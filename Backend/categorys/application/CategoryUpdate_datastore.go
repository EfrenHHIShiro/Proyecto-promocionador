package application

import (
	"context"
	"promocionadorApi/categorys/domain"
	"promocionadorApi/config/database"

	"gopkg.in/mgo.v2/bson"
)

func (r *categoryRepository) CategoryUpdate(ctx context.Context, object *domain.Category) error {

	update := bson.M{
		"$set": object,
	}

	if err := r.db.Collection(database.CCategory).FindOneAndUpdate(ctx, bson.M{"_id": object.ID}, update).Err(); err != nil {
		return err
	}

	return nil
}
