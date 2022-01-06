const express = require('express');

const router = express.Router();
const { auth, validateJWT } = require('../../middlewares');

router.post('/', require('./create'), auth);
router.get('/:id', validateJWT, require('./get'));
router.get('/', validateJWT, require('./list'));

module.exports = router;