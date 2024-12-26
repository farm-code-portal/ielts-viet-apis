const { statusCode, successMessage, failMessage } = require('~/common/message');
const { certificateService } = require('~/service');

async function getAllCertificates(request, reply) {
    try {
        const data = await certificateService.getAllCertificates();
        return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    } catch (err) {
        reply.status(statusCode.internalError).send({ message: failMessage.internalError });
    }
}

module.exports = {
    getAllCertificates,
};
