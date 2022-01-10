const express = require('express');
const { validateJWT } = require('../../middlewares');

const router = express.Router();

router.get('/search', validateJWT, require('./search'));
router.get('/:id', validateJWT, require('./get'));
router.put('/:id', validateJWT, require('./put'));
router.delete('/:id', validateJWT, require('./remove'));
router.post('/', validateJWT, require('./create'));
router.get('/', validateJWT, require('./list'));

module.exports = router;