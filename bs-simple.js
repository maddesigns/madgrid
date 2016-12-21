"use strict";

var bs = require('browser-sync').create();
bs.init({

	files: ["demo/style.css"],
	plugins: [
		{
			module: "bs-html-injector",
			options: {
				files: ["demo/demo.html"]
			}
		}
	],
	watchTask: true,
	ghostMode: false,
	notify: false,
	server: {
		baseDir: "demo",
		index: 'overview.html'
	},
	open: "external"
});

