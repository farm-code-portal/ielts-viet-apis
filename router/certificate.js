const certificateController = require('~/controller/certificate');

function certificateRoute(fastify, options, done) {
  fastify.get(
    '/',
    certificateController.getAllCertificates
  );

  done();
}

module.exports = certificateRoute;