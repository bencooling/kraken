'use strict';

var IndexModel = require('../models/index');

module.exports = function(router){

  var model = new IndexModel();

  router.get('/', function (req, res) {
    // console.log( app.kraken.get('foo') );
    // res.end('foo');
    // res.locals.context = { locality: { language: 'en', country: 'AU' } };
    res.render('index', model);
  });

  router.get('/set-language/:locale', function (req, res) {
    res.cookie('locale', req.params.locale);
    res.redirect('/');
  });

};
