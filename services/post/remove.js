const { BlogPosts } = require('../../models');

function isToDelete(userId, post) {
  if (!post) { return { err: { code: 'notFound', message: 'Post does not exist' } }; }
  if (post.userId !== userId) {
    return { err: { code: 'unauthorized', message: 'Unauthorized user' } };
  }
  return {};
}

module.exports = async (id, userId) => {
  try {
    const postToDelete = await BlogPosts.findByPk(id);
    const validDeletion = isToDelete(userId, postToDelete);
    if (validDeletion.err) return validDeletion;

    const removed = await BlogPosts.destroy({ where: { id, userId } });
    return removed;
  } catch (e) {
    console.log(e);
  }
};
