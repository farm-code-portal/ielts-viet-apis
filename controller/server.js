const {statusCode, successMessage, failMessage} = require('~/common/message');

async function checkServer(request, reply) {
  try {
    return reply.status(statusCode.success).send({ message: successMessage.server });
  } catch (err) {
    reply.status(statusCode.internalError).send({ message: failMessage.internalError });
  }
}

module.exports = {
  checkServer,
};
