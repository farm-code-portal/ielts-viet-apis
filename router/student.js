const studentController = require('~/controller/student');

function StudentRoute(fastify, options, done) {
  fastify.get(
    '/get-all-students',
    studentController.getAllStudents
  );

  fastify.get(
    '/get-student/:id',
    studentController.getStudent
  );

  fastify.delete(
    '/delete-student/:id',
    studentController.deleteStudent
  );

  fastify.post(
    '/insert-student',
    studentController.insertStudent
  );
  fastify.patch(
    '/update-student/:id',
    studentController.updateStudent
  );

  done();
}

module.exports = StudentRoute;
