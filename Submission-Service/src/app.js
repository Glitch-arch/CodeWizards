const fastifyPlugin = require("fastify-plugin");

/**
 *
 * @param {Fastify object} fastify
 * @param {*} options
 */

async function app(fastify, options) {
  fastify.register(require("@fastify/cors"));
}
