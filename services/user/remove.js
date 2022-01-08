const { Users } = require('../../models');

module.exports = async (id) => {
  try {
    const destroyed = await Users.destroy({ where: { id } });
    return destroyed;
  } catch (e) {
    console.log(e);
  }
};