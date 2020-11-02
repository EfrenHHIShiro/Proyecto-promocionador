package domain

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Country struct {
	ID          primitive.ObjectID `bson:"_id,omitempty"`
	CountryName string             `bson:"countryname"`
	State       []*State           `bson:"states" json:"states"`
}

type State struct {
	ID        primitive.ObjectID `bson:"_idstate" json:"_idstate"`
	State     string             `bson:"state"`
	CountryID primitive.ObjectID `bson:"-" json:"countryid"`
}
