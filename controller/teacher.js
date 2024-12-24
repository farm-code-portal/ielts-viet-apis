const { statusCode, successMessage, failMessage } = require('~/common/message');
const { teacherService } = require('~/service');
const { certificateService } = require('~/service');

async function getAllTeachers(request, reply) {
  try {
    const data = await teacherService.getAllTeachers();
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function getTeacher(request, reply) {
  try {
    const { id } = request.params;
    const data = await teacherService.getTeacher(id);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function deleteTeacher(request, reply) {
  try {
    const { id } = request.params;
    const data = await teacherService.deleteTeacher(id);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function insertTeacher(request, reply) {
  try {
    const data_teacher = request.body;
    const data = await teacherService.insertTeacher(data_teacher);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function updateTeacher(request, reply) {
  try {
    const data_teacher = request.body;
    const { id } = request.params;
    const data = await teacherService.updateTeacher({id, data_teacher});
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}


module.exports = {
  getAllTeachers,
  getTeacher,
  deleteTeacher,
  insertTeacher,
  updateTeacher,
};
