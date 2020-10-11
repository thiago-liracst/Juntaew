const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const LocalController = require('./controllers/LocalController');
const HorarioController = require('./controllers/HorarioController');

routes.post('/users', UserController.create);
routes.get('/users', UserController.list);
routes.post('/login', UserController.login);

routes.post('/locais', LocalController.create);
routes.get('/locais', LocalController.list);

routes.post('/horarios', HorarioController.create);
routes.get('/horarios', HorarioController.list);

module.exports = routes;