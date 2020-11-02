package application

import (
	"context"
	"promocionadorApi/config/database"
	"promocionadorApi/countries/domain"

	"gopkg.in/mgo.v2/bson"
)

func (r *countryRepository) StateUpdate(ctx context.Context, object *domain.State) error {

	update := bson.M{
		"$set": bson.M{
			"states.$.state": object.State,
		},
	}

	if err := r.db.Collection(database.CCountry).FindOneAndUpdate(ctx,
		bson.M{"_id": object.CountryID, "states._idstate": object.ID},
		update).Err(); err != nil {
		return err
	}

	return nil
}
