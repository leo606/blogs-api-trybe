const service = require('../../services/user');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, _res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const creation = await service.create({ displayName, email, password, image });
    if (creation.err) {
      return next({ code: creation.err.code, message: creation.err.message });
    }
    req.toAuth = {
      email, password, statusCode: statusCodes.created,
    };
    next();
  } catch (e) {
    console.log(e);
  }
};