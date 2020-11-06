package domain

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Business struct {
	ID             primitive.ObjectID `bson:"_id,omitempty"`
	IDCategory     primitive.ObjectID `bson:"_idcategory"`
	ImageProfile   string             `bson:"imageprofile"`
	ImageBanner    string             `bson:"imagebanner"`
	Name           string             `bson:"businessname"`
	Rfc            string             `bson:"rfc"`
	Socialreason   string             `bson:"socialreason"`
	Email          string             `bson:"email"`
	Cellphone      string             `bson:"cellphone"`
	Address        string             `bson:"address"`
	Postalcode     string             `bson:"postalcode"`
	Longitude      string             `bson:"longitude"`
	Latitude       string             `bson:"latitude"`
	Country        Country            `bson:"country"`
	Documents      []*Document        `bson:"documents"`
	Qualifications []*Qualification   `bson:"qualifications"`
	Events         []*Event           `bson:"events"`
	IsFirst        bool               `bson:"isfirst"`
	Status         bool               `bson:"status"`
	IsOpen         bool               `bson:"isopen"`
}

type Document struct {
	ID            primitive.ObjectID `bson:"_iddocument"`
	DocumentImage string             `bson:"document"`
	Status        bool               `bson:"status"`
}
type Qualification struct {
	ID            primitive.ObjectID `bson:"_idqualification,omitempty"`
	UserID        primitive.ObjectID `bson:"_iduser"`
	Qualification int                `bson:"qualification"`
	Comment       string             `bson:"comment"`
}
type Event struct {
	ID          primitive.ObjectID `bson:""`
	Title       string             `bson:""`
	Description string             `bson:""`
	ImageEvent  string             `bson:""`
	Date        time.Time          `bson:""`
}
type Promotion struct {
	ID             primitive.ObjectID `bson:""`
	ImagePromotion string             `bson:""`
	Title          string             `bson:""`
	Description    string             `bson:""`
	StartDate      time.Time          `bson:""`
	ExpirationDate time.Time          `bson:""`
}
type Country struct {
	IDCountry   primitive.ObjectID `bson:"_idcountry" json:"idcountry"`
	CountryName string             `bson:"countryname" json:"countryname"`
	IDState     primitive.ObjectID `bson:"_idstate" json:"idstate"`
	StateName   string             `bson:"statename" json:"statename"`
}

type BusinessByCatagory struct {
	ID             primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name           string             `bson:"businessname" json:"businessname"`
	ImageProfile   string             `bson:"imageprofile" json:"imageprofile"`
	Longitude      string             `bson:"longitude" json:"longitude"`
	Latitude       string             `bson:"latitude" json:"latitude"`
	Qualifications []*Qualification   `bson:"qualifications" json:"qualifications"`
	Status         bool               `bson:"status" json:"status"`
	IsOpen         bool               `bson:"isopen" json:"isopen"`
}
type PeticionUser struct {
	IDCategory primitive.ObjectID `bson:"_idcategory" json:"idcategory"`
	IDCountry  primitive.ObjectID `bson:"_idcountry" json:"idcountry"`
	IDState    primitive.ObjectID `bson:"_idstate" json:"idstate"`
}

type BusinessGetByID struct {
	ID             primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	ImageProfile   string             `bson:"imageprofile" json:"imageprofile"`
	ImageBanner    string             `bson:"imagebanner" json:"imagebanner"`
	Name           string             `bson:"businessname" json:"businessname"`
	Address        string             `bson:"address" json:"address"`
	Postalcode     string             `bson:"postalcode" json:"postalcode"`
	Longitude      string             `bson:"longitude" json:"longitude"`
	Latitude       string             `bson:"latitude" json:"latitude"`
	Country        Country            `bson:"country" json:"country"`
	Qualifications []*Qualification   `bson:"qualifications" json:"qualifications"`
	Events         []*Event           `bson:"events" json:"events"`
	Promotions     []*Promotion       `bson:"promotions" json:"promotions"`
	IsOpen         bool               `bson:"isopen" json:"isopen"`
}

type BusinessApproveOrDeny struct {
	ID     primitive.ObjectID `bson:"-" json:"id"`
	Status bool               `bson:"status" json:"status"`
}
