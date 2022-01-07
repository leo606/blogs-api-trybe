const { userSchema } = require('../../utils/joiSchemas');
const { Users } = require('../../models');

module.exports = async (userData) => {
  try {
    const valid = userSchema.validate(userData);

    if (valid.error) {
      return { err: { code: 'badRequest', message: valid.error.message } };
    }

    const findUserByEmail = await Users.findOne({ where: { email: userData.email } });

    if (findUserByEmail) {
      return { err: { code: 'conflict', message: 'User already registered' } };
    }
    const created = await Users.create(userData);
    return created;
  } catch (e) {
    console.log(e);
  }
};