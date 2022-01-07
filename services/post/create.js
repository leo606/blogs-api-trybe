const { BlogPosts, Categories } = require('../../models');
const { postSchema } = require('../../utils/joiSchemas');

module.exports = async (post) => {
  try {
    const valid = postSchema.validate(post);
    if (valid.error) {
      return { err: { code: 'badRequest', message: valid.error.message } };
    }
    const cats = await Categories.findAll({ where: { id: post.categoryIds } });
    const create = await BlogPosts.create(post);

    const addCats = await create.addCategory(cats);
    console.log(addCats);
    return create;
  } catch (e) {
    console.log(e);
  }
};