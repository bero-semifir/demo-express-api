// import de mongoose
const mongoose = require('mongoose');

// Définition des attributs d'un utilisateur
const userSchema = {
    name: String,
    email: String,
    phone: String,
    address: String
}

// Création du modèle (Objet qui contient les fonctions pour communiquer avec Mongo)
const UserModel = mongoose.model('users', userSchema)

// Export pour utiliser le modèle à l'exterieur
module.exports = UserModel;
