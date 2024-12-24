const courseController = require('~/controller/course');

function CourseRoute(fastify, options, done) {
  fastify.get(
    '/get-all-courses',
    courseController.getAllCourses
  );

  fastify.get(
    '/get-course/:id',
    courseController.getCourse
  );

  fastify.delete(
    '/delete-course/:id',
    courseController.deleteCourse
  );

  fastify.post(
    '/insert-course',
    courseController.insertCourse
  );
  fastify.patch(
    '/update-course/:id',
    courseController.updateCourse
  );

  done();
}

module.exports = CourseRoute;
