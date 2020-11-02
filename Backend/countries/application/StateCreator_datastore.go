package application

import (
	"context"
	"promocionadorApi/config/database"
	"promocionadorApi/countries/domain"

	"go.mongodb.org/mongo-driver/bson/primitive"

	"gopkg.in/mgo.v2/bson"
)

func (r *countryRepository) StateCreator(ctx context.Context, object *domain.State) error {
	object.ID = primitive.NewObjectID()
	update := bson.M{
		"$push": bson.M{
			"states": object,
		},
	}
	if err := r.db.Collection(database.CCountry).FindOneAndUpdate(ctx, bson.M{"_id": object.CountryID}, update).Err(); err != nil {
		return err
	}

	return nil
}
