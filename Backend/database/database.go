package database

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	_ "github.com/lib/pq"
)

const (
	host     = "127.0.0.1"
	port     = "5432"
	user     = "postgres"
	password = "bleach76"
	dbname   = "GrupoGIT"
)

func InitDB() *gorm.DB {

	dsn := "postgres://" + user + ":" + password + "@" + host + ":" + port + "/" + dbname + "?sslmode=disable"
	db, err := gorm.Open("postgres", dsn)
	if err != nil {
		panic(err.Error())
	}

	return db
}
