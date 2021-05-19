const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const LocalController = require('./controllers/LocalController');
const HorarioController = require('./controllers/HorarioController');
const EventoController = require('./controllers/EventoController');

routes.post('/users', UserController.create);
routes.get('/users', UserController.list);
routes.post('/login', UserController.login);

routes.post('/locais', LocalController.create);
routes.get('/locais', LocalController.list);
routes.post('/local', LocalController.getLocal);
routes.post('/login/company', LocalController.login);

routes.post('/horarios', HorarioController.create);
routes.get('/horarios', HorarioController.list);
routes.post('/horariosLocal', HorarioController.horariosLocal);
routes.delete('/horarios', HorarioController.delete);

routes.post('/evento', EventoController.create);
routes.post('/getEvento', EventoController.getEvento);
routes.post('/reservados', EventoController.list);
routes.delete('/evento', EventoController.delete);
routes.post('/preencherVaga', EventoController.preencherVaga);

module.exports = routes;