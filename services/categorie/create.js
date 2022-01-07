const { Categories } = require('../../models');
const { catSchema } = require('../../utils/joiSchemas');

module.exports = async (name) => {
  try {
    const valid = catSchema.validate({ name });
    if (valid.error) {
      return { err: { code: 'badRequest', message: valid.error.message } };
    }

    const create = Categories.create({ name });
    return create;
  } catch (e) {
    console.log(e);
  }
};