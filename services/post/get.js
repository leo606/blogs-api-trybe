const { BlogPosts, Users, Categories } = require('../../models');

module.exports = async (id) => {
  try {
    const post = await BlogPosts.findByPk(id, {
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories' },
      ],
    });

    if (!post) {
      return { err: { code: 'notFound', message: 'Post does not exist' } };
    }

    return post;
  } catch (e) {
    console.log(e);
  }
};