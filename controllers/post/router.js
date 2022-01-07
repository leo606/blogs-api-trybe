const express = require('express');
const { validateJWT } = require('../../middlewares');

const router = express.Router();

router.post('/', validateJWT, require('./create'));
router.get('/', validateJWT, require('./list'));

module.exports = router;