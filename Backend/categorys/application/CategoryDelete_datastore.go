package application

import (
	"context"
	"promocionadorApi/config/database"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"gopkg.in/mgo.v2/bson"
)

func (r *categoryRepository) CategoryDelete(ctx context.Context, id string) error {

	ID, _ := primitive.ObjectIDFromHex(id)
	if err := r.db.Collection(database.CCategory).FindOneAndDelete(ctx, bson.M{"_id": ID}).Err(); err != nil {
		return err
	}

	return nil
}
