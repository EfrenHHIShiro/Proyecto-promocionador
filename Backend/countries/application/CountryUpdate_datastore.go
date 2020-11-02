package application

import (
	"context"
	"fmt"
	"promocionadorApi/config/database"
	"promocionadorApi/countries/domain"

	"gopkg.in/mgo.v2/bson"
)

func (r *countryRepository) CountryUpdate(ctx context.Context, object *domain.Country) error {
	update := bson.M{
		"$set": bson.M{
			"countryname": object.CountryName,
		},
	}
	fmt.Println(object)
	if err := r.db.Collection(database.CCountry).FindOneAndUpdate(ctx, bson.M{"_id": object.ID}, update).Err(); err != nil {
		return err
	}

	return nil
}
