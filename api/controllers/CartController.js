const db = require('../helper/db');
const fs = require('fs');
const Cart = db.Cart

const getById = async (req, res, next) => {
    let cart;
    try {
        cart = await Cart.findById(req.params.cart_id);
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
		return next(err);
    }
    res.json(cart);
};

const add = async (req, res, next) => {
    const cart = new Cart({
        account_id: req.body.account_id,
        game_id: req.body.game_id,
    });
    try {
		await cart.save();
	} catch (err) {
		res.status(500).json({ message: 'Add to cart failed' });
		return next(err);
	}

	res.status(201).json({});
}

exports.getById = getById;
exports.add = add;