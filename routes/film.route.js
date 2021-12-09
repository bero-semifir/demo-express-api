const express = require('express');

const FilmModel = require('../models/film.model');

const Router = express.Router();

Router.route('/films/search')
    .get(async (req, res) => {
        console.log(req.query);
        let searchParams = req.query;
        let films = await FilmModel.find({ ...searchParams });
        res.json(films);
    });

Router.route('/films')
    .get(async (_, res) => {

        let films = await FilmModel.find();

        if (films.length === 0) {
            res.status(404);
        } else {
            res.status(200);
        }

        res.json(films);
    })
    .post(async (req, res) => {
        let newFilm = req.body;
        try {
            let resp = await FilmModel.create(newFilm);
            res.status(201).json(resp);
        } catch (err) {
            console.error(err);
            sendErrMessage(res, err);
        }
    });

Router.route('/films/:id')
    .get(async (req, res) => {
        try {

            let film = await FilmModel.findById(req.params.id);

            res.status(200).json(film);
        } catch (err) {
            sendErrMessage(res, err);
        }
    })
    .put(async (req, res) => {
        let newFilm = req.body;
        try {
            let resp = await FilmModel.findByIdAndUpdate(req.params.id, newFilm);
            res.json(resp);
        } catch (err) {
            sendErrMessage(res, err);
        }
    })
    .patch(async (req, res) => {

        let film = await FilmModel.findById(req.params.id);

        if (film) {

            Object.keys(req.body).forEach((key) => {
                film[key] = req.body[key];
            });

            await FilmModel.findByIdAndUpdate(req.params.id, film);
            res.status(200);
            res.json(film);
        } else {
            res.status(404);
            res.end();
        }
    })
    .delete(async (req, res) => {
        try {
            let resp = await FilmModel.findByIdAndDelete(req.params.id);
            res.json(resp);
        } catch (err) {
            sendErrMessage(res, err);
        }
    });

module.exports = Router;
const sendErrMessage = (res, err) => {
    res.status(400).json({
        ok: false,
        message: err.message
    });
}
