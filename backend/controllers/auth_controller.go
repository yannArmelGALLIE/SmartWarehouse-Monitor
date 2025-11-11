package controllers

import (
	"encoding/json"
	"net/http"

	"backend/models"
	"backend/services"
	"backend/utils"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type RegisterRequest struct {
	Name     string `json:"name" bson:"name"`
	Email    string `json:"email" bson:"email"`
	Password string `json:"password" bson:"password"`
	Role     string `json:"role" bson:"role"`
}

func Register(w http.ResponseWriter, r *http.Request) {
	var req RegisterRequest
	json.NewDecoder(r.Body).Decode(&req)

	if services.UserExists(req.Email) {
		http.Error(w, "L'utilisateur existe déjà", http.StatusBadRequest)
		return
	}

	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)

	user := models.User{
		Id:       primitive.NewObjectID(),
		Name:     req.Name,
		Email:    req.Email,
		Password: string(hashedPassword),
		Role:     req.Role,
	}

	err := services.CreateUser(user)
	if err != nil {
		http.Error(w, "Erreur création utilisateur", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode((map[string]any{
		"message": "Utilisateur créé avec succès",
		"user": map[string]string{
			"name":  user.Name,
			"email": user.Email,
			"role":  user.Role,
		},
	}))
}

func Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var req LoginRequest
	json.NewDecoder(r.Body).Decode(&req)

	if services.CheckUserCredentials(req.Email, req.Password) {
		token, _ := utils.GenerateToken(req.Email)
		json.NewEncoder(w).Encode(map[string]string{
			"message": "Connexion réussie",
			"token":   token,
		})
		return
	} 

	w.WriteHeader(http.StatusUnauthorized)
	json.NewEncoder(w).Encode(map[string]string{
		"error": "Email ou mot de passe incorrect",
	})
}

func GetUserFromToken(w http.ResponseWriter, r *http.Request) {
	email := r.Header.Get("userEmail")

	user, err := services.FindUserByEmail(email)
	if err != nil {
		http.Error(w, "Utilisateur introuvable", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(map[string]any{
		"name": user.Name,
		"email": user.Email,
		"role": user.Role,
	})
}
