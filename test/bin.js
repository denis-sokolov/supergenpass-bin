var childProcess = require('child_process');
var path = require('path');

var test = require('ava');

var pkg = require('../package.json');
var bin = path.resolve(path.dirname(__dirname), pkg.bin.supergenpass);

test.cb('should run a bin version', function(t){
  childProcess.execFile('node', [bin, '-p', 'foo', 'bar'], function(error, stdout){
    if (error) return t.end(error);
    t.is(stdout, 'gQA9QIBnxE\n');
    t.end();
  })
});
