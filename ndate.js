#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var moment = require('moment');
var fs = require('fs');
var pkg = require(__dirname + '/package.json');

if (argv.help) { 
  fs.createReadStream(__dirname + '/help.txt').pipe(process.stdout);
  return;
}

if (argv.version) {
  console.log(pkg.name + ' ' + pkg.version);
  return;
}

console.log(moment(argv.d || argv.date).format(argv._[0])); 

