require('./layout.less');

var React     = require('react');
var resolver  = require('../..').create();
var Router    = require('react-router');
var routes    = resolver.route(require('./routes'));

Router.run(routes, function(Handler) {
  resolver.handle(Handler).then(function(resolved) {
    React.render(resolved, document.getElementById('app'));
  });
});
