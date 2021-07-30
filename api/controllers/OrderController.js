const db = require('../helper/db');
const fs = require('fs');
const Order = db.Order;

const getByAccountId = async(req, res, next) => {
    let order;
    try {
        order = await Order.find({ account_id: req.params.account_id });
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
        return next(err);
    }
    if (!order) {
        res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
}

const getByOrderId = async(req, res, next) => {
    let order;
    try {
        order = await Order.findById(req.params.order_id);
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
        return next(err);
    }
    if (!order) {
        res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
}

const _delete = async(req, res, next) => {
    let order;
    try {
        order = await Order.findById(req.params.order_id);
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
        return next(err);
    }
    if (!order) {
        res.status(404).json({ message: 'Order not found' });
        return;
    }
    await Order.deleteOne(order);
    res.status(201).json({});
}

const add = async(req, res, next) => {
    const order = new Order({
        account_id: req.body.account_id,
        game_titles: req.body.game_titles,
        total: req.body.total,
        created_date: Date.now(),
    });
    try {
        await order.save();
    } catch (err) {
        res.status(500).json({ message: 'Create order failed' });
        return next(err);
    }

    res.status(201).json(order);
}

exports.getByAccountId = getByAccountId;
exports.getByOrderId = getByOrderId;
exports.delete = _delete;
exports.add = add;