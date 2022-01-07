const express = require('express');

const { validateJWT } = require('../../middlewares');

const route = express.Router();

route.post('/', validateJWT, require('./create'));
route.get('/', validateJWT, require('./list'));

module.exports = route;