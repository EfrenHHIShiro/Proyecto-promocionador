package domain

import "go.mongodb.org/mongo-driver/bson/primitive"

type LoginBusiness struct {
}

type AuthenticateBusiness struct {
}

type RegisterBusiness struct {
	ID           primitive.ObjectID `bson:"_id,omitempty"`
	Name         string             `bson:"businessname"`
	Rfc          string             `bson:"rfc"`
	Socialreason string             `bson:"socialreason"`
	Email        string             `bson:"email"`
	Cellphone    string
	Address      string
	postalcode   string
	Longitude    string
	Latitude     string
	IDCountry    primitive.ObjectID
	IDState      primitive.ObjectID
	Documents    []*Document
	IsFirst      bool
	Status       bool
}

type Document struct {
	ID            primitive.ObjectID `bson:"_idDocument"`
	DocumentImage string             `bson:"document"`
	Status        bool               `bson:"status"`
}
