const { Op } = require('sequelize');
const { BlogPosts, Users, Categories } = require('../../models');

module.exports = async (q) => {
  try {
    const posts = BlogPosts.findAll({
      where: {
        [Op.or]: [{ title: { [Op.like]: `%${q}%` } }, { content: { [Op.like]: `%${q}%` } }],
      },
      include: [
        { model: Users, as: 'user', exclude: ['password'] },
        { model: Categories, as: 'categories' }],
    });
    return posts;
  } catch (e) {
    console.log(e);
  }
};
