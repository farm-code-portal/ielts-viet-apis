const { statusCode, successMessage, failMessage } = require('~/common/message');
const { courseCateService } = require('~/service');

async function getAllCourseCategories(request, reply) {
    try {
        const data = await courseCateService.getAllCourseCategories();
        return reply.status(statusCode.success).send({ data: data, message: successMessage.index });
    } catch (err) {
        reply.status(statusCode.internalError).send({ message: failMessage.internalError });
    }
}

module.exports = {
    getAllCourseCategories
};
