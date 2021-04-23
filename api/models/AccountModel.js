'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AccountSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
      type: String,
      default: "https://cutt.ly/ovXeqBc"
  }
});

module.exports = mongoose.model('Account', AccountSchema);