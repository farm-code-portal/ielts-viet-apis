const utilsController = require('~/controller/utlis');

function UtilsRoute(fastify, options, done) {

  fastify.get(
    '/get-all-levels',
    utilsController.getAllLevels
  );
  fastify.get(
    '/get-all-certificates',
    utilsController.getAllCertificates
  );
  fastify.get(
    '/get-all-course-categories',
    utilsController.getAllCourseCategories
  );
  done();
}

module.exports = UtilsRoute;
