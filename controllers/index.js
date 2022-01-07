const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/user', require('./user/router'));
root.use('/login', require('./login/router'));
root.use('/categories', require('./category/router'));
root.use('/post', require('./post/router'));

module.exports = root;
