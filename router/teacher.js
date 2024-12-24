const teacherController = require('~/controller/teacher');

function TeacherRoute(fastify, options, done) {
  fastify.get(
    '/get-all-teachers',
    teacherController.getAllTeachers
  );

  fastify.get(
    '/get-teacher/:id',
    teacherController.getTeacher
  );

  fastify.delete(
    '/delete-teacher/:id',
    teacherController.deleteTeacher
  );

  fastify.post(
    '/insert-teacher',
    teacherController.insertTeacher
  );
  fastify.patch(
    '/update-teacher/:id',
    teacherController.updateTeacher
  );

  done();
}

module.exports = TeacherRoute;
