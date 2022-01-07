const { Users } = require('../../models');

module.exports = async () => {
  try {
    const list = await Users.findAll({ attributes: { exclude: ['password'] } });
    return list;
  } catch (e) {
    console.log(e);
  }
};