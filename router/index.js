const serverRoute = require('./server');
const organizationRoute = require('./organization');

async function routes(fastify) {
  fastify.register(serverRoute, { prefix: '/server' });
  fastify.register(organizationRoute, { prefix: '/organization' });
}

module.exports = routes;
