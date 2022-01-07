const Sequelize = require('sequelize');
const { BlogPosts, Categories } = require('../../models');
const { postSchema } = require('../../utils/joiSchemas');

const config = require('../../config/config');

const sequelize = new Sequelize(config.test);

module.exports = async (post) => {
  try {
    const valid = postSchema.validate(post);
    if (valid.error) {
      return { err: { code: 'badRequest', message: valid.error.message } };
    }
    const findCategories = await Categories.findAll({ where: { id: post.categoryIds } });
    if (findCategories.length < post.categoryIds.length) {
      return { err: { code: 'badRequest', message: '"categoryIds" not found' } };
    }

    const result = await sequelize.transaction(async (transaction) => {
      const createPost = await BlogPosts.create(post, { transaction });

      await createPost.addCategory(findCategories, { transaction });
      return createPost;
    });

    return result;
  } catch (e) {
    console.log(e);
  }
};