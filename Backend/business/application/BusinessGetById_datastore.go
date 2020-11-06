package application

import (
	"context"
	"promocionadorApi/business/domain"
	"promocionadorApi/config/database"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"gopkg.in/mgo.v2/bson"
)

func (r *businessRepository) BusinessGetById(ctx context.Context, id string) (*domain.BusinessGetByID, error) {
	business := &domain.BusinessGetByID{}

	iD, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	conditions := bson.M{"_id": iD, "status": true, "isfirst": false}
	if err := r.db.Collection(database.CBusiness).FindOne(ctx, conditions).Decode(business); err != nil {
		return nil, err
	}

	return business, nil
}
