const { statusCode, successMessage, failMessage } = require('~/common/message');
const { studentService } = require('~/service');

async function getAllStudents(request, reply) {
  try {
    const data = await studentService.getAllStudents();
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function getStudent(request, reply) {
  try {
    const { id } = request.params;
    const data = await studentService.getStudent(id);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function deleteStudent(request, reply) {
  try {
    const { id } = request.params;
    const data = await studentService.deleteStudent(id);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    console.log(err);
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function insertStudent(request, reply) {
  try {
    const data_student = request.body;
    const data = await studentService.insertStudent(data_student);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function updateStudent(request, reply) {
  try {
    const data_student = request.body;
    const { id } = request.params;
    const data = await studentService.updateStudent({id, data_student});
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

module.exports = {
  getAllStudents,
  getStudent,
  deleteStudent,
  insertStudent,
  updateStudent,
};
