const service = require('../../services/post');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (_req, res, _next) => {
  try {
    const list = await service.list();
    res.status(statusCodes.ok).json(list);
  } catch (e) {
    console.log(e);
    res.status(statusCodes.InternalServerError);
  }
};