const { statusCode, successMessage, failMessage } = require('~/common/message');
const { organizationService } = require('~/service');

async function getInfo(request, reply) {
  try {
    const data = await organizationService.getInfo();
    return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

module.exports = {
  getInfo,
};
