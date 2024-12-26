const blogController = require('~/controller/blog');

function blogRoute(fastify, options, done) {
  fastify.get(
    '/',
    blogController.getAllBlogs
  );

  fastify.get(
    '/:id',
    blogController.getBlog
  );

  fastify.delete(
    '/:id',
    blogController.deleteBlog
  );

  fastify.post(
    '/',
    blogController.insertBlog
  );
  fastify.patch(
    '/:id',
    blogController.updateBlog
  );

  done();
}

module.exports = blogRoute;