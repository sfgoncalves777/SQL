const { Router } = require('express');
const { selectAll, select, insert, update, remove } = require('./controller');

const routes = Router();

routes.get('/student', selectAll);
routes.get('/student/:id', select);
routes.post('/student', insert);
routes.put('/student/:id', update);
routes.delete('/student/:id', remove);

module.exports = routes;
