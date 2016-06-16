'use strict';

const config = require('../config/config.json');

const env = process.env.NODE_ENV;

if (!env || env.indexOf('dev') === 0) {
    Object.assign(config, require('../config/development.json'), { dev: true });
    config.paypal = require('../config/paypal.json');
} else {
    const client_id = process.env.CLIENT_ID,
        secret = process.env.CLIENT_SECRET,
        environment = process.env.PAYPAL_ENV,
        merchant_id = process.env.MERCHANT_ID;
    
    config.paypal = {
        client_id,
        secret,
        environment,
        merchant_id
    };
}

export default config;