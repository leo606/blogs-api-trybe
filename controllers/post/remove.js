const service = require('../../services/post');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;

    const removed = await service.remove(id, userId);
    if (removed.err) return next({ code: removed.err.code, message: removed.err.message });

    res.status(statusCodes.noContent).end();
  } catch (e) {
    console.log(e);
    res.status(statusCodes.InternalServerError);
  }
};