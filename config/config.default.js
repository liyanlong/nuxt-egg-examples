'use strict';

module.exports = {
  middleware: [ 'errorHandler' ],
  errorHandler: {
    match: '/api',
  },
  nuxt: require('./config.nuxt.js'),
};
