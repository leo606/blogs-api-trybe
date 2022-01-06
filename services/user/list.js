const { User } = require('../../models');

module.exports = async () => {
  try {
    const list = await User.findAll({ attributes: { exclude: ['password'] } });
    return list;
  } catch (e) {
    console.log(e);
  }
};