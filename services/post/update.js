const { BlogPosts, Categories } = require('../../models');
const { updatePostSchema } = require('../../utils/joiSchemas');

module.exports = async (id, { title, content, userId }) => {
  try {
    const valid = updatePostSchema.validate({ title, content });
    if (valid.error) { return { err: { code: 'badRequest', message: valid.error.message } }; }

    const [updated] = await BlogPosts.update(
      { title, content },
      { where: { id, userId } },
    );

    if (updated) {
      const post = BlogPosts.findByPk(id, { include: { model: Categories, as: 'categories' } });
      return post;
    }

    return { err: { code: 'unauthorized', message: 'Unauthorized user' } };
  } catch (e) {
    console.log(e);
  }
};

// return { err: { code: 'unauthorized', message: 'Unauthorized user' } };