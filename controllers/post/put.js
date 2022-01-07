const service = require('../../services/post');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;
    if (categoryIds) return next({ code: 'badRequest', message: 'Categories cannot be edited' });

    const updated = await service.update(id, { title, content, userId });

    if (updated.err) {
      return next({ code: updated.err.code, message: updated.err.message });
    }
    res.status(statusCodes.ok).json(updated);
  } catch (e) {
    console.log(e);
    res.status(statusCodes.InternalServerError);
  }
};