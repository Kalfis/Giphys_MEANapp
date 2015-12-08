'use strict'
let mongoose = require('mongoose');

let Beer = mongoose.Schema({
  name: String,
  abv: Number
});

module.exports = mongoose.model('Beer', Beer);
