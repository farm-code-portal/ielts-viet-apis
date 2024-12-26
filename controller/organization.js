const { statusCode, successMessage, failMessage } = require('~/common/message');
const { organizationService } = require('~/service');
const { validate, organizationSchema } = require('~/validate');
async function getInfo(request, reply) {
  try {
    const data = await organizationService.getInfo();
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

async function updateInfo(request, reply) {
  try {
    const body = request.body;
    const { id } = request.params;
    const Exist = await organizationService.check(id)
    if (Exist === true) {
      const check = validate(body, organizationSchema.updateOrganizationSchema, reply);
      if (check === false) {
        return reply.status(statusCode.badRequest).send({ message: failMessage.invalidData });
      };
      if (!body) {
        return reply.status(statusCode.badRequest).send({ message: failMessage.emptyData });
      }
      const dataUpdate = body;
      const data = await organizationService.updateInfo({ id, dataUpdate });
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
  getInfo,
  updateInfo,
};
