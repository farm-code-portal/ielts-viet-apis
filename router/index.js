const serverRoute = require('./server');
const organizationRoute = require('./organization');
const courseRoute = require('./course');
const studentRoute = require('./student');
const teacherRoute = require('./teacher');
const blogRoute = require('./blog');
const levelRoute = require('./level');
const courseCateRoute = require('./courseCate');
const certificateRoute = require('./certificate');

async function routes(fastify) {
  fastify.register(serverRoute, { prefix: '/server' });
  fastify.register(organizationRoute, { prefix: '/organization' });
  fastify.register(courseRoute, { prefix: '/course' });
  fastify.register(studentRoute, { prefix: '/student' });
  fastify.register(teacherRoute, { prefix: '/teacher' });
  fastify.register(blogRoute, { prefix: '/blog' });
  fastify.register(levelRoute, { prefix: '/level' });
  fastify.register(courseCateRoute, { prefix: '/courseCate' });
  fastify.register(certificateRoute, { prefix: '/certificate' });
}

module.exports = routes;
