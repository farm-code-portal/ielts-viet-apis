const levelController = require('~/controller/level');

function levelRoute(fastify, options, done) {
  fastify.get(
    '/',
    levelController.getAllLevels
  );

  done();
}

module.exports = levelRoute;