'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
    game_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false
    },
    tags: {
        type: [String],
        required: true
    },
    publish_date: {
        type: Date,
        required: true
    },
    price: {
        type: String,
        require: true
    },
    description: {
        type: String,
        default: ""
    },
    thumbnail: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Game', GameSchema);