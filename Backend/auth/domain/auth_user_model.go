package domain

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

type LoginUser struct {
	Email      string `bson:"email"`
	Password   string `bson:"password"`
	TokenMovil string `bson:"tokenmovil, omitempty"`
}

type AuthenticateUsers struct {
	ID       primitive.ObjectID `bson:"_id"`
	Email    string
	Password string
	Status   bool
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

type PetitionChangePasswordUser struct {
	ID        primitive.ObjectID `bosn:"_id"`
	IdEncrypt string             `bosn:"-"`
	Email     string             `bson:"email"`
}

type ChangePasswordUser struct {
	ID        primitive.ObjectID `bosn:"_id,omitempty"`
	IdEncrypt string             `bson:"-"`
	Password  string             `bson:"Password"`
}

func (cu *ChangePasswordUser) HashPassword() {
	bytes, _ := bcrypt.GenerateFromPassword([]byte(cu.Password), 14)
	cu.Password = string(bytes)
}
