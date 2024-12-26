const organizationController = require('~/controller/organization');

function organizationRoute(fastify, options, done) {
  fastify.get(
    '/',
    organizationController.getInfo
  );

  fastify.patch(
    '/:id',
    organizationController.updateInfo
  );

  done();
}

module.exports = organizationRoute;
