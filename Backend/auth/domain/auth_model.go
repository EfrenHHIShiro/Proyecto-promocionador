package domain

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

type LoginWeb struct {
}

type LoginBusiness struct {
}

type LoginUser struct {
	Email      string `bson:"email"`
	Password   string `bson:"password"`
	TokenMovil string `bson:"tokenmovil, omitempty"`
}

type AuthenticateWeb struct {
}

type AuthenticateBusiness struct {
}

type AuthenticateUsers struct {
	ID       primitive.ObjectID `bson:"_id"`
	Email    string
	Password string
	Status   bool
}

type RegisterWeb struct {
}

type RegisterBusiness struct {
}

type RegisterUser struct {
	ID       primitive.ObjectID `bson:"_id,omitempty"`
	Email    string             `bson:"email"`
	Password string             `bson:"password"`
	Status   bool               `json:"-" bson:"status"`
}

func (ru *RegisterUser) HashPassword() {
	bytes, _ := bcrypt.GenerateFromPassword([]byte(ru.Password), 14)
	ru.Password = string(bytes)
}

type ActiveUserAccount struct {
	Status bool `bson:"status"`
}
