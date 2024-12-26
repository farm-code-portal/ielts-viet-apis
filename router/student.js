const studentController = require('~/controller/student');

function studentRoute(fastify, options, done) {
  fastify.get(
    '/',
    studentController.getAllStudents
  );

  fastify.get(
    '/:id',
    studentController.getStudent
  );

  fastify.delete(
    '/:id',
    studentController.deleteStudent
  );

  fastify.post(
    '/',
    studentController.insertStudent
  );

  fastify.patch(
    '/:id',
    studentController.updateStudent
  );

  done();
}

module.exports = studentRoute;
