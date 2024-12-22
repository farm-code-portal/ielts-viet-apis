const organizationController = require('~/controller/organization');

function organizationRoute(fastify, options, done) {
  fastify.get(
    '/get-info',
    organizationController.getInfo
  );
  done();
}

module.exports = organizationRoute;
