import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import scss from "rollup-plugin-scss";
import vue from "rollup-plugin-vue";

export default [{
	// This object is the configuration to compile the app template
	"external": ["vue", "bootstrap"],
	"input": "index.js",
	"output": {
		"file": "compiled_index.js",
		"format": "iife",
		"globals": {
			"bootstrap": "Bootstrap",
			"vue": "Vue"
		},
		"interop": "default",
		"name": "app"
	},
	"plugins": [

		/*
		 * Adding the plugin below will transform style tags into CSS files.
		 * See: https://rollup-plugin-vue.vuejs.org/options.html#css
		 */
		vue({ "css": false }),

		/*
		 * Then, the plugin below will compile the CSS files with SCSS syntax to CSS syntax. The CSS
		 * files will not be included to the JavaScript file but rather exported to a CSS file.
		 * See: https://www.npmjs.com/package/rollup-plugin-scss
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

		/*
		 * Add the plugin below to include the third-party library in the compilation.
		 * See: https://www.npmjs.com/package/@rollup/plugin-node-resolve
		 */
		nodeResolve({
			"browser": true
		}),

		/*
		 * Then, the plugin below will replace the assertions of environment to tell the library will
		 * be used for development mode.
		 * See: https://www.npmjs.com/package/@rollup/plugin-replace
		 */
		replace({
			"__VUE_OPTIONS_API__": "true",
			"__VUE_PROD_DEVTOOLS__": "true",
			"process.env.NODE_ENV": '"dev"'
		})
	]
}, {
	"input": "bootstrap.src.js",
	"output": {
		"file": "compiled_bootstrap.js",
		"format": "iife",
		"name": "Bootstrap"
	},
	"plugins": [

		/*
		 * Add the plugin below to extract compiled bootstrap.
		 * See: https://www.npmjs.com/package/rollup-plugin-scss
		 */
		scss(),

		nodeResolve({
			"browser": true
		}),

		/*
		 * Then, the plugin below will convert the module properly.
		 * See: https://www.npmjs.com/package/@rollup/plugin-commonjs
		 */
		commonjs()
	]
}];
