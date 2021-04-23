'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: String,
    require: true
  },
  description: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model('Game', GameSchema);