const express = require('express');
const questionController = require('./controllers/questionController.js')
const route = express.Router();
const roomController = require('./controllers/roomController.js')
route.get('/', (req, res, next) => res.render("index", {page: 'enter-room'}));
module.exports = route;
route.get('/create-pass', (req, res, next) => res.render("index", {page: 'create-pass'}));
// ROOMS
route.post('/create-room', roomController.create)
route.get('/room/:room', roomController.open);
route.post('/enterroom', roomController.enter);
// Questions
route.post('/questions/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index )
