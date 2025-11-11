package services

import (
	"context"
	"log"
	"time"

	"backend/config"
	"backend/models"
	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/crypto/bcrypt"
)

func UserExists(email string) bool {
	var user models.User
	err := config.DB.Collection("users").FindOne(context.TODO(), bson.M{"email": email}).Decode(&user)
	return err == nil
}

func CreateUser(user models.User) error {
	_, err := config.DB.Collection("users").InsertOne(context.TODO(), user)
	if err != nil {
		log.Print("Erreur création utilisateur : ", err)
		return err
	}
	return nil
}

func CheckUserCredentials(email, password string) bool {
	var user models.User

	err := config.DB.Collection("users").FindOne(context.TODO(), bson.M{"email": email}).Decode(&user)
	if err != nil {
		log.Println("Utilisateur introuvable : ", err)
		return false
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	return err == nil
}

func FindUserByEmail(email string) (models.User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var user models.User
	err := config.DB.Collection("users").FindOne(ctx, bson.M{"email": email}).Decode(&user)
	return user, err
}