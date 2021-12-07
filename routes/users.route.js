// import du framework
const express = require('express');

// récupération du Router Express
const Router = express.Router();

let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
]

// logique pour la route 'users'
Router.route('/users')
    .get((_, res) => {
        if (users.length == 0) {
            res.status(404).json([]);
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
            Object.keys(req.body).forEach((key)=>{
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
            users.splice(userIndex,1);
            res.status(204);
            res.end();
        } else {
            res.status(404);
            res.end();
        }
    });

// export de la route
module.exports = Router;
