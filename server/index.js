'use strict';

import Koa from 'koa';
import path from 'path';
import config from './config';
import middleware from './middleware/index';

// start
const app = new Koa();

// set up critical paths
const viewPath = path.join(__dirname, '..', config.views);
const assetPath = path.join(__dirname, '..', config.assets);

// middleware setup
middleware(app, {
    viewPath,
    assetPath,
    config
});

// done
export default app;