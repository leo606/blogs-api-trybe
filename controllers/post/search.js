const service = require('../../services/post');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const { q } = req.query;
    const search = await service.search(q);

    if (search.err) {
      next({ code: search.err.code, message: search.err.message });
    }

    res.status(statusCodes.ok).json(search);
  } catch (e) {
    console.log(e);
    res.status(statusCodes.InternalServerError);
  }
};