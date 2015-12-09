'use strict';
let mongoose = require('mongoose');

let Beer = mongoose.Schema({
  name: String,
  abv: Number,
  note: String,
  done: false
});

module.exports = mongoose.model('Beer', Beer);
