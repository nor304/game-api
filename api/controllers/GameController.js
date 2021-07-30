const db = require('../helper/db');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const Game = db.Game;

const getAll = async (req, res, next) => {
    let games;
    try {
        games = await Game.find();
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
		return next(err);
    }
    res.status(200).json(games);
}

const getById = async (req, res, next) => {
    let game;
    try {
        game = await Game.find({game_id : req.params.game_id});
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
		return next(err);
    }
    if(!game) {
        res.status(404).json({ message: 'Game not found'}); 
    }
    res.status(200).json(game);
}

const add = async (req, res, next) => {
    const game = new Game({
        game_id: uuidv4(),
        title: req.body.title,
        tags: req.body.tags,
        publish_date: Date.now(),
        price: req.body.price,
        description: req.body.description,
        thumbnail: req.body.thumbnail,
    });
    try {
		await game.save();
	} catch (err) {
		res.status(500).json({ message: 'Add new game failed' });
		return next(err);
	}

	res.status(201).json(game);
}

const _delete = async (req, res, next) => {
    let game;
    try {
        game = await Game.findById(req.params.game_id);
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
		return next(err);
    }
    if (!game) {
        res.status(404).json({ message: 'Game not found'});
        return;
    }
    await Game.deleteOne(game);
    res.status(201).json({});
}

exports.getAll = getAll;
exports.getById = getById;
exports.add = add;
exports.delete = _delete;