'use strict'
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/beers_db');
// check if mongoose is working
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('mongoose connected');
});

const routes = require('./config/routes');

app.use(routes);
app.use(logger('dev'));
app.use('/', express.static(__dirname + '/public'))
app.use('/scripts', express.static(__dirname + '/node_modules'))

// server
const server = app.listen(3000, () => {
  console.log('server running')
});
