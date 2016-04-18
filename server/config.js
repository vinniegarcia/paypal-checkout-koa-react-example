'use strict';

const config = require('../config/config.json');

const env = process.env.NODE_ENV;

if (!env || env.indexOf('dev') === 0) {
    Object.assign(config, require('../config/development.json'), { dev: true });
    config.paypal = require('../config/paypal.json');
}

export default config;