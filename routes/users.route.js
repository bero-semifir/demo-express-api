// import du framework
const express = require('express');

const UserModel = require('../models/user.model');

// récupération du Router Express
const Router = express.Router();

// logique pour la route 'users'
Router.route('/users')
    // async / await https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function
    .get( async (_, res) => {
        // Récupération de TOUS les utilisateurs dans la base
        // await = attends la reponse
        let users = await UserModel.find();

        if(users.length === 0){
            res.status(404);
        } else {
            res.status(200);
        }

        res.json(users);

    })
    .post((req, res) => {
        let newUser = req.body;
        users.push(newUser);
        res.status(201).json(newUser);
    });

// logique pour la route 'users/id'
Router.route('/users/:id')
    .get((req, res) => {
        // recherche d'un utilisateur par id
        let user = users.find((usr) => {
            // Le prédicat valide une égalité stricte
            // usr.id est un number / req.params.id est un string
            // parseInt nous assure d'avoir un id en number
            return usr.id === parseInt(req.params.id);
        })
        if (user) {
            res.status(200);
            res.json(user);
        } else {
            res.status(404);
            res.end();
        }
    })
    .put((req, res) => {
        let userIndex = users.findIndex((usr) => {
            return usr.id === parseInt(req.params.id);
        });

        if (userIndex != -1) {
            users[userIndex] = req.body;
            res.status(200);
            res.json(users[userIndex]);
        } else {
            res.status(404);
            res.end();
        }
    })
    .patch((req, res) => {
        let userIndex = users.findIndex((usr) => {
            return usr.id === parseInt(req.params.id);
        });

        if (userIndex != -1) {
            // Object.keys retourne les clés d'un objets
            Object.keys(req.body).forEach((key) => {
                users[userIndex][key] = req.body[key];
            })

            res.status(200);
            res.json(users[userIndex]);
        } else {
            res.status(404);
            res.end();
        }
    })
    .delete((req, res) => {
        let userIndex = users.findIndex((usr) => {
            return usr.id === parseInt(req.params.id);
        });

        if (userIndex != -1) {
            users.splice(userIndex, 1);
            res.status(204);
            res.end();
        } else {
            res.status(404);
            res.end();
        }
    });

// export de la route
module.exports = Router;
