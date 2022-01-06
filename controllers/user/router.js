const express = require('express');

const router = express.Router();
const auth = require('../../middlewares/auth');

router.post('/', require('./create'), auth);
router.get('/', require('./list'));

module.exports = router;