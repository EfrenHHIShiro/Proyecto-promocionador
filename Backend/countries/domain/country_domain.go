package domain

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Country struct {
	ID          primitive.ObjectID `bson:"_id, omitempty"`
	CountryName string             `bson:"countryname"`
}
