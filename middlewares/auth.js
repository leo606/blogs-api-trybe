const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const { Users } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const { email, password, statusCode } = req.toAuth;

    const user = await Users.findOne({ where: { email, password } });
    if (!user) {
      return next({ code: 'badRequest', message: 'Invalid fields' });
    }

    const token = jwt.sign({ data: user }, secret, jwtConfig);
    res.status(statusCode).json({ token });
  } catch (e) {
    console.log(e);
  }
};
