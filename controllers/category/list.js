const service = require('../../services/categorie');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const list = await service.list();
    
    if (list.err) {
      return next({ code: list.err.code, message: list.err.message });
    }

    return res.status(statusCodes.ok).json(list);
  } catch (e) {
    console.log(e);
  }
};