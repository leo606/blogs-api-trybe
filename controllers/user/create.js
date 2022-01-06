const service = require('../../services/user');

module.exports = async (req, _res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const creation = await service.create({ displayName, email, password, image });
    if (creation.err) {
      return next({ code: creation.err.code, message: creation.err.message });
    }
    next();
  } catch (e) {
    console.log(e);
  }
};