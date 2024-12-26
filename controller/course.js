const { statusCode, successMessage, failMessage } = require('~/common/message');
const { courseService } = require('~/service');
const { validate, courseSchema } = require('~/validate');

async function getAllCourses(request, reply) {
  try {
    const data = await courseService.getAllCourses();
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function getCourse(request, reply) {
  try {
    const { id } = request.params;
    const data = await courseService.getCourse(id);
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

async function deleteCourse(request, reply) {
  try {
    const { id } = request.params;
    const Exist = await courseService.getCourse(id)
    if (Exist) {
      const data = await courseService.deleteCourse(id);
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    } else {
      return reply.status(statusCode.notFound).send({ message: failMessage.notFoundID });
    }
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function insertCourse(request, reply) {
  try {
    const body = request.body;
    const check = validate(body, courseSchema.insertCourseSchema, reply);
    if (check === false) {
      return reply.status(statusCode.badRequest).send({ message: failMessage.invalidData });
    };
    const dataInsert = {
      name: body.name,
      thumbnail: body.thumbnail,
      price: body.price,
      duration: body.duration,
      level_begin: body.level_begin,
      level_end: body.level_end,
      category: body.category,
      goal: body.goal,
    }
    const Exist = await courseService.checkCourse(dataInsert);
    if (Exist) {
      return reply.status(statusCode.badRequest).send({ message: failMessage.existData });
    }
    const data = await courseService.insertCourse(dataInsert);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function updateCourse(request, reply) {
  try {
    const body = request.body;
    const { id } = request.params;
    const Exist = await courseService.getCourse(id);
    if (Exist) {
      const check = validate(body, courseSchema.updateCourseSchema, reply);
      if (check === false) {
        return reply.status(statusCode.badRequest).send({ message: failMessage.invalidData });
      };
      if (!body) {
        return reply.status(statusCode.badRequest).send({ message: failMessage.emptyData });
      }
      const dataUpdate = body;
      const data = await courseService.updateCourse({ id, dataUpdate });
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    }
    else {
      return reply.status(statusCode.notFound).send({ message: failMessage.notFoundID });
    }
  } catch (err) {
    console.log(err);
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

module.exports = {
  getAllCourses,
  getCourse,
  deleteCourse,
  insertCourse,
  updateCourse,
};
