package database

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var db *mongo.Database
var session mongo.Session

const (
	uri    = "mongodb+srv://Shiro:sh1r0@promocionador.o5oo8.mongodb.net/Promocionador?retryWrites=true&w=majority"
	dbName = "Promocionador"
)

func InitData() (*mongo.Database, mongo.Session) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	clientOpts := options.Client().ApplyURI(uri)
	client, err := mongo.Connect(ctx, clientOpts)
	fmt.Println(err)
	fmt.Println("------------------------------------------")
	if err != nil {
		panic(err)
	}

	session, err := client.StartSession()
	if err != nil {
		panic(err)
	}

	defer client.Disconnect(ctx)

	return client.Database(dbName), session
}
