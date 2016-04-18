'use strict';

require('babel-register');

var app = require('./server/').default;

app.listen(process.env.PORT || 3000);