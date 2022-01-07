const service = require('../../services/categorie');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;
    const created = await service.create(name);
    
    if (created.err) {
      return next({ code: created.err.code, message: created.err.message });
    }

    return res.status(statusCodes.created).json(created);
  } catch (e) {
    console.log(e);
  }
};