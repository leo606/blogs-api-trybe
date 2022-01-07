const { Categories } = require('../../models');

module.exports = async () => {
  try {
    const list = await Categories.findAll();
    return list;
  } catch (e) {
    console.log(e);
    return { err: { code: 'InternalServerError', message: 'something went wrong' } };
  }
};