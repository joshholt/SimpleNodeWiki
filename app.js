
/**
 * Module dependencies.
 */

var Express = require('express'),
		Routes  = require('./routes'),
		port    = process.env.PORT || 3000;

var App = module.exports = Express.createServer();

// Configuration

App.configure(function(){
	App.set('views', __dirname + '/views');
	App.set('view engine', 'jade');
	App.use(Express.bodyParser());
	App.use(Express.methodOverride());
	App.use(App.router);
	App.use(Express.static(__dirname + '/public'));
});

App.configure('development', function(){
	App.use(Express.errorHandler({ dumpExceptions: true, showStack: true }));
});

App.configure('production', function(){
	App.use(Express.errorHandler());
});

// Routes
App.get('/:file.html', Routes.misc);
App.get('/', Routes.index);
App.get('/:name', Routes.view);
App.get('/:name/edit', Routes.edit);
App.post('/:name', Routes.save);

App.listen(port);
console.log("Express server listening on port %d in %s mode", App.address().port, App.settings.env);
