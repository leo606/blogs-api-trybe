const { loginSchema } = require('../../utils/joiSchemas');
const statusCodes = require('../../utils/statusCodes.json');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const valid = loginSchema.validate({ email, password });

    if (valid.error) {
      return next({ code: 'badRequest', message: valid.error.message });
    }

    req.toAuth = {
      email, password, statusCode: statusCodes.ok,
    };
    next();
  } catch (e) {
    console.log(e);
  }
};