const express = require('express');
const studentRoutes = require('./student/routes');
const courseRoutes = require('./course/routes');
const registeredRoutes = require('./registered/routes');

const app = express();
app.use(express.json());
app.use(studentRoutes);
app.use(courseRoutes);
app.use(registeredRoutes);

module.exports = app;