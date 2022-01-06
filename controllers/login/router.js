const express = require('express');

const router = express.Router();
const { auth } = require('../../middlewares');

router.post('/', require('./create'), auth);

module.exports = router;