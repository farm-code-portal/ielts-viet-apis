const { statusCode, successMessage, failMessage } = require('~/common/message');
const { blogService } = require('~/service');

async function getAllBlogs(request, reply) {
  try {
    const data = await blogService.getAllBlogs();
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function getBlog(request, reply) {
  try {
    const { id } = request.params;
    const data = await blogService.getBlog(id);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function deleteBlog(request, reply) {
  try {
    const { id } = request.params;
    const data = await blogService.deleteBlog(id);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function insertBlog(request, reply) {
  try {
    const data_blog = request.body;
    const data = await blogService.insertBlog(data_blog);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function updateBlog(request, reply) {
  try {
    const data_blog = request.body;
    const { id } = request.params;
    const data = await blogService.updateBlog({id, data_blog});
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

module.exports = {
  getAllBlogs,
  getBlog,
  deleteBlog,
  insertBlog,
  updateBlog,
};
