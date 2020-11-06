package application

import (
	"context"
	"errors"
	"promocionadorApi/business/domain"
	"promocionadorApi/config/database"

	"gopkg.in/mgo.v2/bson"
)

func (r *businessRepository) BusinessApproveOrDeny(ctx context.Context, object *domain.BusinessApproveOrDeny) error {

	result := &domain.BusinessApproveOrDeny{}

	update := bson.M{
		"$set": object,
	}
	filter := bson.M{
		"_id": object.ID,
	}
	if err := r.db.Collection(database.CBusiness).FindOne(ctx, filter).Decode(result); err != nil {
		return err
	}
	if result.Status == object.Status {
		if result.Status == true && object.Status == true {
			return errors.New("Este negocio ya esta activado")
		} else {
			return errors.New("Este negocio ya esta desactivado")
		}
	} else {
		_, err := r.db.Collection(database.CBusiness).UpdateOne(ctx, filter, update)
		if err != nil {
			return err
		}
		if object.Status != false {
			// Send email de aviso de negacion
		} else {
			// Send emial de aviso de aprovacion
		}
	}

	return nil
}
