// import d'express
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const poulet = require('./middlewares/poulet.middleware');
// import des routes
const userRoute = require('./routes/users.route');

// création de l'app
const app = express();

// Middlewares
app.use(express.json());    // Middleware pour parser le JSON
app.use(morgan('tiny'));    // Middleware qui annonce les connections dans la console
app.use(helmet());          // Middleware pour sécuriser les headers de l'API
app.use(poulet);

// utilisation des routes
app.use(userRoute);

// écoute sur le port donné en param
app.listen(3000);
