// import de mongoose
const mongoose = require('mongoose');

// Définition des attributs d'un utilisateur
const movieSchema = {
    // _id: { type: mongoose.SchemaTypes.ObjectId },
    title: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String },
    release_date: { type: Date },
}

// Création du modèle (Objet qui contient les fonctions pour communiquer avec Mongo)
const MovieModel = mongoose.model('Movie', movieSchema)

// Export pour utiliser le modèle à l'exterieur
module.exports = MovieModel;
