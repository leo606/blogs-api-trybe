const service = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const creation = await service.create({ displayName, email, password, image });
    if (creation.err) {
      return next({ code: 'badRequest', message: creation.err.message });
    }
    res.status(501).end();
  } catch (e) {
    console.log(e);
  }
};