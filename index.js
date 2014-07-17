 'use strict';

var app      = require('express')(),
    kraken   = require('kraken-js'),
    db       = require('./lib/database'),
    port     = process.env.PORT || 8000,
    options  = {
      onconfig: function(config, next){
        global.db = db(global.base_path + '/database');
        next(null, config);
      }
    };

global.base_path = __dirname;

app.use(kraken(options));

app.listen(port, function (err) {
  console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});