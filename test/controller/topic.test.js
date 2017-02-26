'use strict'
/* eslint-env node, mocha */

const request = require('supertest')
const mock = require('egg-mock')
const assert = require('assert')

describe('test/app/controller/topic.test.js', () => {
  let app
  before(() => {
    app = mock.app()
    return app.ready()
  })

  afterEach(mock.restore)

  it('should GET /api/v2/topics', function* () {
    const r = yield request(app.callback())
    .get('/api/v2/topics')
    .expect(200)

    assert(Array.isArray(r.body))
    assert(typeof r.body[0].content === 'string')
  })
})
