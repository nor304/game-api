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