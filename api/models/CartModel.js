'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CartSchema = new Schema({
  account_id: {
    type: String,
    required: true
  },
  game_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Cart', CartSchema);