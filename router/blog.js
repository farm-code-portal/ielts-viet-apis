const blogController = require('~/controller/blog');

function BlogRoute(fastify, options, done) {
  fastify.get(
    '/get-all-blogs',
    blogController.getAllBlogs
  );

  fastify.get(
    '/get-blog/:id',
    blogController.getBlog
  );

  fastify.delete(
    '/delete-blog/:id',
    blogController.deleteBlog
  );

  fastify.post(
    '/insert-blog',
    blogController.insertBlog
  );
  fastify.patch(
    '/update-blog/:id',
    blogController.updateBlog
  );

  done();
}

module.exports = BlogRoute;