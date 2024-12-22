require('dotenv').config();
const moduleAlias = require('module-alias');
const path = require('path');
moduleAlias({ base: path.resolve(__dirname, '.') });
const fastify = require('fastify')({ logger: true });
const database = require('~/integrate/connectMongoDB');
const fastifyCors = require('@fastify/cors');
const fastifyStatic = require('@fastify/static');
const router = require('~/router/index');

const PORT = process.env.PORT || 8000;

database.connectDatabase(async function () {
  try {
    await fastify.register(fastifyCors, {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      credentials: true,
    });
    fastify.register(fastifyStatic, {
      root: path.join(__dirname, 'website'),
    });
    fastify.register(require('@fastify/formbody'), { bodyLimit: 0, });
    fastify.register(require('@fastify/multipart'), {
      limits: {
        fieldSize: 5 * 1024 * 1024,
        fileSize: 5 * 1024 * 1024,
        files: 10
      }
    });
    fastify.register(require('@fastify/websocket'))
    fastify.register(router, { prefix: '/api' });
    fastify.listen({ host: '0.0.0.0', port: PORT });
    console.log(`App is listening at port ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
