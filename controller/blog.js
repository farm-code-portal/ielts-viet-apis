const { statusCode, successMessage, failMessage } = require('~/common/message');
const { blogService } = require('~/service');
const { validate, blogSchema } = require('~/validate');

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
    if (data) {
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    }
    else {
      return reply.status(statusCode.notFound).send({ message: failMessage.notFoundID });
    }
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function deleteBlog(request, reply) {
  try {
    const { id } = request.params;
    const Exist = await blogService.getBlog(id)
    if (Exist) {
      const data = await blogService.deleteBlog(id);
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    } else {
      return reply.status(statusCode.notFound).send({ message: failMessage.notFoundID });
    }
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function insertBlog(request, reply) {
  try {
    const body = request.body;
    const check = validate(body, blogSchema.insertBlogSchema, reply);
    if (check === false) {
      return reply.status(statusCode.badRequest).send({ message: failMessage.invalidData });
    };
    const dataInsert = {
      title: body.title,
      author: body.author,
      description: body.description,
      thumbnail: body.thumbnail,
      blogDetail: body.blogDetail,
    }
    const data = await blogService.insertBlog(dataInsert);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function updateBlog(request, reply) {
  try {
    const body = request.body;
    const { id } = request.params;
    const Exist = blogService.getBlog(id)
    if (Exist) {
      const check = validate(body, blogSchema.updateBlogSchema, reply);
      if (check === false) {
        return reply.status(statusCode.badRequest).send({ message: failMessage.invalidData });
      };
      if (!body) {
        return reply.status(statusCode.badRequest).send({ message: failMessage.emptyData });
      }
      const dataUpdate = body;
      const data = await blogService.updateBlog({ id, dataUpdate });
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    } else {
      return reply.status(statusCode.notFound).send({ message: failMessage.notFoundID });
    }
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
