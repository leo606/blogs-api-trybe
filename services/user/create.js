const { userSchema } = require('../../utils/joiSchemas');

module.exports = async (userData) => {
  try {
    const valid = userSchema.validate(userData);

    if (valid.error) {
      return { err: { message: valid.error.message } };
    }
  } catch (e) {
    console.log(e);
  }
};