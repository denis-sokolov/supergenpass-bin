var sgp = require('..');

var test = require('ava');

test.cb('should run a node version', function(t){
  sgp('foo', 'bar', {}, password => {
    t.is(password, 'gQA9QIBnxE');
    t.end();
  });
});
