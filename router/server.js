const serverController = require('~/controller/server');

function serverRoute(fastify, options, done) {
    fastify.get('/check', serverController.checkServer);

    done();
}

module.exports = serverRoute;
