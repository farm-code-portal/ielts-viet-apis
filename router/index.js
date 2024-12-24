const serverRoute = require('./server');
const organizationRoute = require('./organization');
const CourseRoute = require('./course');
const StudentRoute = require('./student');
const TeacherRoute = require('./teacher');
const BlogRoute = require('./blog');
const UtilsRoute = require('./utils');

async function routes(fastify) {
  fastify.register(serverRoute, { prefix: '/server' });
  fastify.register(organizationRoute, { prefix: '/organization' });
  fastify.register(CourseRoute, { prefix: '/course' });
  fastify.register(StudentRoute, { prefix: '/student' });
  fastify.register(TeacherRoute, { prefix: '/teacher' });
  fastify.register(BlogRoute, { prefix: '/blog' });
  fastify.register(UtilsRoute, { prefix: '/utils' });
}

module.exports = routes;
