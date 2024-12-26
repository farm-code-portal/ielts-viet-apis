const teacherController = require('~/controller/teacher');

function teacherRoute(fastify, options, done) {
  fastify.get(
    '/',
    teacherController.getAllTeachers
  );

  fastify.get(
    '/:id',
    teacherController.getTeacher
  );

  fastify.delete(
    '/:id',
    teacherController.deleteTeacher
  );

  fastify.post(
    '/',
    teacherController.insertTeacher
  );
  fastify.patch(
    '/:id',
    teacherController.updateTeacher
  );

  done();
}

module.exports = teacherRoute;
