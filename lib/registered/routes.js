const { Router } = require('express');
const { select, insert } = require('./controller');

const routes = Router();

routes.get('/registered', select);
routes.post('/registered', insert);

module.exports = routes;
