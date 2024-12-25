const { statusCode, successMessage, failMessage } = require('~/common/message');
const { blogService } = require('~/service');
const { validate, BlogSchema } = require('~/validate');

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
    const blogExist = blogService.getBlog(id)
    if (blogExist) {
      const data = await blogService.deleteBlog(id);
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    } else {
      return reply.status(statusCode.notFound).send({ data: [], message: failMessage.notFoundID });
    }
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function insertBlog(request, reply) {
  try {
    const body = request.body;
    const blogExist = blogService.getBlog(body.id)
    if (blogExist) {
      return reply.status(statusCode.badRequest).send({ message: failMessage.existData });
    }
    const check = validate(body, BlogSchema.InseartBlogSchema, reply);
    if (!check) {
      console.log(check);
      return reply.status(statusCode.badRequest).send({ message: failMessage.existData });
    };
    const dataInsert = {
      title: body.title,
    }
    const data = await blogService.insertBlog(dataInsert);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function updateBlog(request, reply) {
  try {
    const data_blog = request.body;
    const { id } = request.params;
    const data = await blogService.updateBlog({ id, data_blog });
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
