const jwt = require('jsonwebtoken');
const statusCodes = require('../utils/statusCodes.json');

const secret = process.env.JWT_SECRET || 'nothing';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const { User } = require('../models');

module.exports = (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const user = User.findOne({ where: { email, password } });
    if (!user) {
      return next({ code: 'badRequest', message: 'notfound auth' });
    }

    const token = jwt.sign({ data: user }, secret, jwtConfig);
    res.status(statusCodes.created).json({ token });
  } catch (e) {
    console.log(e);
  }
};
