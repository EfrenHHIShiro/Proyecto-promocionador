package domain

import (
	"promocionadorApi/business/domain"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type LoginBusiness struct {
}

type AuthenticateBusiness struct {
}

type RegisterBusiness struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"-"`
	IDCategory   primitive.ObjectID `bson:"_idcategory"   json:"idcategory"`
	Name         string             `bson:"businessname"  json:"businessname"`
	Rfc          string             `bson:"rfc"           json:"rfc"`
	Socialreason string             `bson:"socialreason"  json:"socialreason"`
	Email        string             `bson:"email"         json:"email"`
	Cellphone    string             `bson:"cellphone" json:"cellphone"`
	Address      string             `bson:"address" json:"address"`
	Postalcode   string             `bson:"postalcode" json:"postalcode"`
	Longitude    string             `bson:"longitude" json:"longitude"`
	Latitude     string             `bson:"latitude" json:"latitude"`
	Country      domain.Country     `bson:"country" json:"country"`
	Documents    []*domain.Document `bson:"documents" json:"-"`
	IsFirst      bool               `bson:"isfirst" json:"-"`
	Status       bool               `bson:"status" json:"-"`
	IsOpen       bool               `bson:"isopen" json:"-"`
}
