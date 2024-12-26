const { statusCode, successMessage, failMessage } = require('~/common/message');
const { studentService } = require('~/service');
const { validate, studentSchema } = require('~/validate');

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

async function deleteStudent(request, reply) {
  try {
    const { id } = request.params;
    const Exist = await studentService.getStudent(id)
    if (Exist) {
      const data = await studentService.deleteStudent(id);
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    } else {
      return reply.status(statusCode.notFound).send({ message: failMessage.notFoundID });
    }
  } catch (err) {
    console.log(err);
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function insertStudent(request, reply) {
  try {
    const body = request.body;
    const check = validate(body, studentSchema.insertStudentSchema, reply);
    if (check === false) {
      return reply.status(statusCode.badRequest).send({ message: failMessage.invalidData });
    };
    const dataInsert = {
      name: body.name,
      avatar: body.avatar,
      introduction: body.introduction,
      school: body.school,
      description: body.description,
      level: body.level,
      resources: body.resources,
    }
    const Exist = await studentService.checkStudent(dataInsert);
    console.log(Exist);
    if (Exist) {
      return reply.status(statusCode.badRequest).send({ message: failMessage.existData });
    }
    const data = await studentService.insertStudent(dataInsert);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function updateStudent(request, reply) {
  try {
    const body = request.body;
    const { id } = request.params;
    const Exist = await studentService.getStudent(id)
    if (Exist) {
      const check = validate(body, studentSchema.updateStudentSchema, reply);
      if (check === false) {
        return reply.status(statusCode.badRequest).send({ message: failMessage.invalidData });
      };
      if (!body) {
        return reply.status(statusCode.badRequest).send({ message: failMessage.emptyData });
      }
      const dataUpdate = body;
      const data = await studentService.updateStudent({ id, dataUpdate });
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
  getAllStudents,
  getStudent,
  deleteStudent,
  insertStudent,
  updateStudent,
};
