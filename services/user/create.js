const { userSchema } = require('../../utils/joiSchemas');
const { User } = require('../../models');

module.exports = async (userData) => {
  try {
    const valid = userSchema.validate(userData);

    if (valid.error) {
      return { err: { message: valid.error.message } };
    }

    const findUserByEmail = await User.findOne({ where: { email: userData.email } });

    if (findUserByEmail) {
      return { err: { message: 'User already registered' } };
    }
    const created = await User.create(userData);
    return created;
  } catch (e) {
    console.log(e);
  }
};