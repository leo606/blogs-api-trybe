const statusCodes = require('../utils/statusCodes.json');

module.exports = (err, _req, res, _next) => {
  const status = statusCodes[err.code];
  res.status(status).json({ message: err.message });
};