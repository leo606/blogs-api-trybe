const { Users } = require('../../models');

module.exports = async (id) => {
  try {
    const user = await Users.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) {
      return { err: { code: 'notFound', message: 'User does not exist' } };
    }

    return user;
  } catch (e) {
    console.log(e);
  }
};