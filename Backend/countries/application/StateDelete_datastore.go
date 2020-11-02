package application

import (
	"context"
	"promocionadorApi/config/database"
	"promocionadorApi/countries/domain"

	"gopkg.in/mgo.v2/bson"
)

func (r *countryRepository) StateDelete(ctx context.Context, object *domain.State) error {
	update := bson.M{
		"$pull": bson.M{
			"states": bson.M{
				"_idstate": object.ID,
			},
		},
	}
	if err := r.db.Collection(database.CCountry).FindOneAndUpdate(ctx, bson.M{"_id": object.CountryID}, update).Err(); err != nil {
		return err
	}

	return nil
}
