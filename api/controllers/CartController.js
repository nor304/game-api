const db = require('../helper/db');
const fs = require('fs');
const Cart = db.Cart;

const getById = async (req, res, next) => {
    let cart;
    try {
        cart = await Cart.find({ account_id: req.params.account_id });
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
		return next(err);
    }
    res.json(cart);
};

const add = async (req, res, next) => {
    const cart = new Cart({
        account_id: req.body.account_id,
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
    });
    try {
		await cart.save();
	} catch (err) {
		res.status(500).json({ message: 'Add to cart failed' });
		return next(err);
	}

	res.status(201).json({});
}

const _delete = async (req, res, next) => {
    let cart;
    try {
        cart = await Cart.find({ game_id : req.params.game_id});
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
		return next(err);
    }
    if(!cart) {
        res.status(404).json({ message: 'This game does not exsit in your cart'});
        return;
    }
    await Cart.deleteOne(cart[0]);
    res.status(201).json({});
};

exports.getById = getById;
exports.add = add;
exports.delete = _delete;