const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'nothing';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({ code: 'unauthorized', message: 'Token not found' });
  }
  try {
  const decoded = jwt.verify(token, secret);
  req.user = decoded;
  next();
} catch (e) {
  return next({ code: 'unauthorized', message: 'Expired or invalid token' });
}
};