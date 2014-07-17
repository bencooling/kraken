/**
 * A custom library to establish a database connection
 */
'use strict';

var diskdb = require('diskdb');

function db(path){
  return diskdb.connect(path);
};

module.exports = db;