const fp = require('fastify-plugin')

const plugin = fp(function (fastify, _, done) {
  if (fastify._share === true) {
    return done()
  }
  fastify.decorate('singleton', {})
  fastify.decorate('factory', {})
  fastify.decorate('model', {})
  fastify.decorate('service', {})
  fastify.decorate('util', {})
  fastify.decorate('_share', true)
  done()
}, { fastify: '3.x' })

module.exports = plugin
