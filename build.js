import fs from "fs";
import { buildSync } from "esbuild";
import { minify } from "html-minifier";
import cleanCSS from "clean-css";

fs.rmSync("./dist", { recursive: true });

buildSync({
	entryPoints: ["./src/index.js"],
	outfile: "./dist/index.js",
	minify: true,
	minifySyntax: true,
	bundle: true,
});

// Copy all files in src/public to dist/
fs.readdirSync("./src/public").forEach((file) => {
	fs.copyFileSync(`./src/public/${file}`, `./dist/${file}`);
});

// Minify index.html
fs.readFile("./src/index.html", "utf8", (err, html) => {
	fs.writeFile(
		"./dist/index.html",
		minify(html, {
			collapseWhitespace: true,
			minifyCSS: true,
			minifyJS: true,
			removeComments: true,
			removeEmptyAttributes: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			useShortDoctype: true,
		}),
		(err) => {
			if (err) {
				console.log(err);
			}
		}
	);
});

// Minify css
fs.readFile("./src/styles.css", "utf8", (err, css) => {
	fs.writeFile(
		"./dist/styles.css",
		new cleanCSS().minify(css).styles,
		(err) => {
			if (err) {
				console.log(err);
			}
		}
	);
});
