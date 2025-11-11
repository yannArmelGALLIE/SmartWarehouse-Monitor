package main

import (
	"log"
	"net/http"

	"backend/config"
	"backend/routes"
	"backend/middleware"
)

func main() {
	config.ConnectDB()
	router := routes.SetupRouter()
	handler := middleware.EnableCORS(router)

	log.Println("Serveur démarré sur le port 8080...")
	log.Fatal(http.ListenAndServe(":8080", handler))
}