window.onload = function() {
  var editor       = ace.edit("editor"),
      MarkdownMode = require('ace/mode/markdown').Mode,
      request      = superagent;

  editor.setTheme("ace/theme/twilight");
  editor.getSession().setMode(new MarkdownMode());

  window.getEditorContent = function() {
		return editor.getSession().getValue();
	};

	window.saveEditorContent = function() {
		request.post(window.savePath)
			.type('form-data')
			.send({ markdown: getEditorContent() })
			.end(function (res) {
				if (res.ok)	window.location = window.savePath;
			});
	};

};