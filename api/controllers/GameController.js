const db = require('../helper/db');
const fs = require('fs');
const Game = db.Game

const getAll = async (req, res, next) => {
    let games;
    try {
        games = await Game.find();
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
		return next(err);
    }
    res.json(games);
}

const getById = async (req, res, next) => {
    let game;
    try {
        game = await Game.findById(req.params.game_id);
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
		return next(err);
    }
    if(!game) {
        res.status(404).json({ message: 'Game not found'}); 
    }
    res.json(game);
}

exports.getAll = getAll;
exports.getById = getById;