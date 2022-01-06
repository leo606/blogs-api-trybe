const express = require('express');

const router = express.Router();
const auth = require('../../middlewares/auth');
const validateJWT = require('../../middlewares/validateJWT');

router.post('/', require('./create'), auth);
router.get('/', validateJWT, require('./list'));

module.exports = router;