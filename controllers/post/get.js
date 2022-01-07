const service = require('../../services/post');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await service.get(id);

    if (post.err) {
      return next({ code: post.err.code, message: post.err.message });
    }

    res.status(statusCodes.ok).json(post);
  } catch (e) {
    console.log(e);
    res.status(statusCodes.InternalServerError);
  }
};