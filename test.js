const test = require('ava')
const fastify = require('fastify')
const share = require('./index')

test('test plugin', async (t) => {
  const app = fastify()
  app.register(share).after(() => {
    app.singleton.model = true
    app.singleton.singleton = true
    app.singleton.factory = true
    app.singleton.service = true
    app.singleton.util = true
  })
  app.register(share);
  app.register(async () => {
    t.is(app.singleton.model, true)
    t.is(app.singleton.singleton, true)
    t.is(app.singleton.factory, true)
    t.is(app.singleton.model, true)
    t.is(app.singleton.service, true)
    t.is(app.singleton.util, true)
  })
  await app.ready()
})
