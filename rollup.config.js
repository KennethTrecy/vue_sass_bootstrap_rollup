import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "rollup-plugin-replace";
import scss from "rollup-plugin-scss";
import vue from "rollup-plugin-vue";

export default [{
	// This object is the configuration to compile the app template
	"external": ["vue"],
	"input": "index.js",
	"output": {
		"file": "compiled_index.js",
		"format": "iife",
		"globals": {
			"vue": "Vue"
		},
		"interop": "default",
		"name": "app"
	},
	"plugins": [
		// Adding the plugin below will transform style tags into CSS files
		vue({ "css": false }),

		/*
		 * Then, the plugin below will compile the CSS files with SCSS syntax to CSS syntax. The CSS
		 * files will not be included to the JavaScript file but rather exported to a CSS file.
		 */
		scss()
	]
}, {
	"input": "vue.src.js",
	"output": {
		"file": "compiled_vue.js",
		"format": "iife",
		"name": "Vue"
	},
	"plugins": [
		// Add the plugin below to include the third-party library in the compilation.
		nodeResolve({
			"browser": true
		}),

		/*
		 * Then, the plugin below will replace the assertions of environment to tell the library will
		 * be used for development mode.
		 */
		replace({
			"process.env.NODE_ENV": '"dev"'
		})
	]
}];
