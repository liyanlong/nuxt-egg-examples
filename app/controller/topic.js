'use strict'

exports.show = function* () {
  this.body = yield this.service.topic.show({
    id: this.params.id,
    mdrender: this.query.mdrender !== 'false',
    accesstoken: this.query.accesstoken || ''
  })
}

exports.index = function* () {
  this.validate({
    page: { format: /\d+/, required: false },
    tab: { type: 'enum', values: [ 'ask', 'share', 'job', 'good' ], required: false },
    limit: { format: /\d+/, required: false }
  }, this.query)

  this.body = yield this.service.topic.list({
    page: this.query.page,
    tab: this.query.tab,
    limit: this.query.limit,
    mdrender: this.query.mdrender !== 'false'
  })
}
