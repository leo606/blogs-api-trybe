const service = require('../../services/user');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.get(id);
    
    if (user.err) {
      return next({ code: user.err.code, message: user.err.message });
    }

    res.status(statusCodes.ok).json(user);
  } catch (e) {
    console.log(e);
  }
};