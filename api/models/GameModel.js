'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  publish_date: {
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