const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'nothing';

module.exports = (req, res, next) => {
  const token = req.body.authorization;
  if (!token) {
    return next({ code: 'unauthorized', message: 'Token not found' });
  }
  try {
  const decoded = jwt.verify(token, secret);
  req.user = decoded;
} catch (e) {
  res.status(400).json({ message: e.message });
}
};