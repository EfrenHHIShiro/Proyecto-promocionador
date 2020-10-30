package database

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var db *mongo.Database
var session mongo.Session

const (
	uri       = "mongodb+srv://Shiro:sh1r0@promocionador.o5oo8.mongodb.net/Promocionador?retryWrites=true&w=majority"
	dbName    = "Promocionador"
	CUser     = "users"
	CCategory = "categories"
)

func InitData() *mongo.Database {
	client, err := mongo.NewClient(options.Client().ApplyURI(uri))
	if err != nil {
		panic(err)
	}
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		panic(err)
	}
	// defer client.Disconnect(ctx)

	return client.Database(dbName)
}
