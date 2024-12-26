const courseController = require('~/controller/course');

function courseRoute(fastify, options, done) {
  fastify.get(
    '/',
    courseController.getAllCourses
  );

  fastify.get(
    '/:id',
    courseController.getCourse
  );

  fastify.delete(
    '/:id',
    courseController.deleteCourse
  );

  fastify.post(
    '/',
    courseController.insertCourse
  );
  fastify.patch(
    '/:id',
    courseController.updateCourse
  );

  done();
}

module.exports = courseRoute;
