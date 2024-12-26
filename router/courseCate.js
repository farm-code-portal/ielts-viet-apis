const courseCateController = require('~/controller/courseCate');

function courseCateRoute(fastify, options, done) {
  fastify.get(
    '/',
    courseCateController.getAllCourseCategories
  );

  done();
}

module.exports = courseCateRoute;