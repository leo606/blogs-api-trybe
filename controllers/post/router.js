const express = require('express');
const { validateJWT } = require('../../middlewares');

const router = express.Router();

router.get('/:id', validateJWT, require('./get'));
router.post('/', validateJWT, require('./create'));
router.get('/', validateJWT, require('./list'));

module.exports = router;