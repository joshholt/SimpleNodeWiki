var DB = require('../lib/db');

module.exports = {
	index: function(req, res, next) {
		res.redirect("/home");
	},
	view: function(req, res, next) {
		DB.loadPage(req.params.name, function(err, page) {
			if (err) return next(err);
			res.render('view', page);
		});
	},
	edit: function(req, res, next) {
		DB.loadPage(req.params.name, function(err, page) {
			if (err) return next(err);
			res.render('edit', page);
		});
	},
	save: function(req, res, next) {
		DB.savePage(req.params.name, req.body.markdown, function (err) {
			if (err) return next(err);
			res.redirect("/" + req.params.name);
		});
	},
	misc: function(req, res, next) {
		res.sendfile(req.params.file + '.html');
	}
};