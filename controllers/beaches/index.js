'use strict';

var db = require( global.base_path + '/models/beaches');

module.exports = function (router) {

  router.get('/', function (req, res) {
    res.render('beaches', {"beaches": db.beaches.find()});
  });

  router.post('/', function (req, res) {
    var name = { 'name' : req.param('beach-name') };
    db.beaches.update(name, name, {upsert:true});
    res.render('beaches', {"beaches": db.beaches.find()});
  });

};
