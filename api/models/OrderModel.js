'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    account_id: {
        type: String,
        required: true
    },
    game_id: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Order', OrderSchema);