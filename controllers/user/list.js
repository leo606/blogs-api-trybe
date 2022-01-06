const service = require('../../services/user');

module.exports = async (_req, res, _next) => {
  try {
    const list = await service.list();
    res.status(200).json(list);
  } catch (e) {
    console.log(e);
  }
};