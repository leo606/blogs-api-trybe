const { BlogPosts, Users, Categories } = require('../../models');

module.exports = async () => {
  try {
    const list = await BlogPosts.findAll({
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories' },
      ],
    });

    return list;
  } catch (e) {
    console.log(e);
  }
};