'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CartSchema = new Schema({
  account_id: {
    type: String,
    required: true
  },
  game_id: {
    type: String
  }
});

module.exports = mongoose.model('Cart', CartSchema);