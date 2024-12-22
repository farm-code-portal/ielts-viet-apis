const organizationController = require('~/controller/organization');

function organizationRoute(fastify, options, done) {

  fastify.get(
    '/get-info',
    organizationController.getInfo
  );
  fastify.patch(
    '/update-info/:id',
    organizationController.updateInfo
  );

  done();
}

module.exports = organizationRoute;
