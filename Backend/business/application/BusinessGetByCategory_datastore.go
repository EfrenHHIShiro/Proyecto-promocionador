package application

import (
	"context"
	"promocionadorApi/business/domain"
	"promocionadorApi/config/database"

	"gopkg.in/mgo.v2/bson"
)

func (r *businessRepository) BusinessGetByCategory(ctx context.Context, object *domain.PeticionUser) ([]*domain.BusinessByCatagory, error) {
	business := []*domain.BusinessByCatagory{}

	conditions := bson.M{
		"_idcategory":        object.IDCategory,
		"country._idcountry": object.IDCountry,
		"country._idstate":   object.IDState,
	}

	cursor, err := r.db.Collection(database.CBusiness).Find(ctx, conditions)

	if err != nil {
		defer cursor.Close(ctx)
		return nil, err
	}
	if err = cursor.All(ctx, &business); err != nil {
		return nil, err
	}

	return business, nil
}
