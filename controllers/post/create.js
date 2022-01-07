const service = require('../../services/post');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    const created = service.create({ title, content, categoryIds });

    if (created.err) {
      return next({ code: created.err.code, message: created.err.message });
    }

    res.status(statusCodes.created).json(created);
  } catch (e) {
    console.log(e);
  }
};