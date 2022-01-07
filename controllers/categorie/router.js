const express = require('express');

const { validateJWT } = require('../../middlewares');

const route = express.Router();

route.post('/', validateJWT, require('./create'));

module.exports = route;