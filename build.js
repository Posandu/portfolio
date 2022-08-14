import fs from "fs";
import { buildSync } from "esbuild";
import { minify } from "html-minifier";
import cleanCSS from "clean-css";
import minifyClassnames from "@posandu/roughclass";

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

const html = fs.readFileSync("./src/index.html", "utf8");
const css = fs.readFileSync("./src/styles.css", "utf8");

const { html: zippedHTML, css: zippedCSS } = minifyClassnames(css, html, true);

// Minify index.html
fs.writeFileSync(
	"./dist/index.html",
	minify(zippedHTML, {
		collapseWhitespace: true,
		minifyCSS: true,
		minifyJS: true,
		removeComments: true,
		removeEmptyAttributes: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		useShortDoctype: true,
	})
);

// Minify css
fs.writeFileSync(
	"./dist/styles.css",
	new cleanCSS().minify(zippedCSS).styles,
	(err) => {
		if (err) {
			console.log(err);
		}
	}
);
