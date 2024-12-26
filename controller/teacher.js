const { statusCode, successMessage, failMessage } = require('~/common/message');
const { teacherService } = require('~/service');
const { validate, teacherSchema } = require('~/validate');
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

async function deleteTeacher(request, reply) {
  try {
    const { id } = request.params;

    const Exist = await teacherService.getTeacher(id)
    if (Exist) {
      const data = await teacherService.deleteTeacher(id);
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    } else {
      return reply.status(statusCode.notFound).send({ message: failMessage.notFoundID });
    }
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function insertTeacher(request, reply) {
  try {
    const body = request.body;
    const check = validate(body, teacherSchema.insertTeacherSchema, reply);
    if (check === false) {
      return reply.status(statusCode.badRequest).send({ message: failMessage.invalidData });
    };
    const dataInsert = {
      name: body.name,
      avatar: body.avatar,
      introduction: body.introduction,
      nationality: body.nationality,
      experiences: body.experiences,
      certificates: body.certificates,
    }
    const Exist = await teacherService.checkTeacher(dataInsert);
    if (Exist) {
      return reply.status(statusCode.badRequest).send({ message: failMessage.existData });
    }
    const data = await teacherService.insertTeacher(dataInsert);
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function updateTeacher(request, reply) {
  try {
    const body = request.body;
    const { id } = request.params;
    const Exist = await teacherService.getTeacher(id)
    if (Exist) {
      const check = validate(body, teacherSchema.updateTeacherSchema, reply);
      if (check === false) {
        return reply.status(statusCode.badRequest).send({ message: failMessage.invalidData });
      };
      if (!body) {
        return reply.status(statusCode.badRequest).send({ message: failMessage.emptyData });
      }
      const dataUpdate = body;
      const data = await teacherService.updateTeacher({ id, dataUpdate });
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    }
    else {
      return reply.status(statusCode.notFound).send({ message: failMessage.notFoundID });
    }
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
