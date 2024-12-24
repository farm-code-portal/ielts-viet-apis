const { statusCode, successMessage, failMessage } = require('~/common/message');
const { courseService } = require('~/service');

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
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function deleteCourse(request, reply) {
  try {
    const { id } = request.params;
    const data = await courseService.deleteCourse(id);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function insertCourse(request, reply) {
  try {
    const data_course = request.body;
    const data = await courseService.insertCourse(data_course);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function updateCourse(request, reply) {
  try {
    const data_course = request.body;
    const { id } = request.params;
    const data = await courseService.updateCourse({id, data_course});
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
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
