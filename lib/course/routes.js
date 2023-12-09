const { Router } = require('express');
const { selectAll, select, insert, update, remove } = require('./controller');

const routes = Router();

routes.get('/course', selectAll);
routes.get('/course/:id', select);
routes.post('/course', insert);
routes.put('/course/:id', update);
routes.delete('/course/:id', remove);

module.exports = routes;
