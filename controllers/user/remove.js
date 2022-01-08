const service = require('../../services/user');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await service.remove(id);
    
    if (user.err) {
      return next({ code: user.err.code, message: user.err.message });
    }

    res.status(statusCodes.noContent).end();
  } catch (e) {
    console.log(e);
    res.status(statusCodes.InternalServerError);
  }
};