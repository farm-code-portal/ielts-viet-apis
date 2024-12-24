const { statusCode, successMessage, failMessage } = require('~/common/message');
const { levelService } = require('~/service');
const { certificateService } = require('~/service');
const { courseCateService } = require('~/service');

async function getAllLevels(request, reply) {
  try {
    const data = await levelService.getAllLevels();
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function getAllCertificates(request, reply) {
    try {
      const data = await certificateService.getAllCertificates();
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    } catch (err) {
      reply.status(statusCode.internalError).send({ message: failMessage.internalError });
    }
  }

  async function getAllCourseCategories(request, reply) {
    try {
      const data = await courseCateService.getAllCourseCategories();
      return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    } catch (err) {
      reply.status(statusCode.internalError).send({ message: failMessage.internalError });
    }
  }

module.exports = {
    getAllLevels,
    getAllCertificates,
    getAllCourseCategories
};
