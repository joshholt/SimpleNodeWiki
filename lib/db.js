var FS = require('fs')
  , Path = require('path')
  , Markdown = require('markdown').markdown;

/**
 * Use this function to map wiki page names to files on the real filesystem
 * @param  {String} name the wiki page name
 * @return {String} the path to the real file
 */
function pathFromName(name) {
	return Path.join(__dirname, "../pages", name + ".markdown");
}

/**
 * Use this function to load a page, parse the title and generate HTML
 * @param  {String}   name     the wiki page name
 * @param  {Function} callback the callback to execute after HTML generation
 */
exports.loadPage = function(name, callback) {
	var path = pathFromName(name);

	FS.readFile(path, 'utf8', function(err, markdown) {

		var exists = true;
		if (err) {
			if (err.code === "ENOENT") {
				markdown = "#" + name.replace(/_/g, " ") + "\n\nThis page does not exist yet.";
				exists = false;
			} else {
				return callback(err);
			}
		}

		var tree  = Markdown.parse(markdown)
		  , title = name
		  , html;

		for (var i = 1, l = tree.length; i < l; i++) {
			if (tree[i] && tree[i][0] === "header") {
				title = tree[i][2];
				tree.splice(i, 1);
				break;
			}
		}

		html = Markdown.toHTML(tree);

		callback(null, {
			name: name
		, title: title
		, exists: exists
		, markdown: markdown
		, html: html
		});
	});
};

exports.savePage = function(name, value, callback) {
	var path = pathFromName(name);
	FS.writeFile(path, value, callback);
};