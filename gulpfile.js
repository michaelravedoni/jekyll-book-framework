const browserSync = require("browser-sync").create();
const child = require("child_process");
const gulp = require("gulp");
const gutil = require("gulp-util");
const mainCSS = "assets/css/turetcss/turetcss.css"; /* Main stylesheet (pre-build) */
const siteRoot = "_site";

/**
 * Fix Windows compatibility issue
 */
const jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

/**
 * Build Jekyll site
 */
gulp.task("jekyll-build", ["css"], function() {
  browserSync.notify("Building Jekyll site...");
  return child.spawn("bundle", ["exec", jekyll, "build", "--incremental"], { stdio: "inherit" });
});

gulp.task("css", function() {
  const atimport = require("postcss-import");
  const postcss = require("gulp-postcss");
  const autoprefixer = require("gulp-autoprefixer");
  const postcssPresetEnv = require('postcss-preset-env');
  const cssnano = require('cssnano');
  const typescale = require('postcss-typescale');

  return gulp
    .src(mainCSS)
    .pipe(postcss([
        atimport(),
        postcssPresetEnv({
          stage: 0,
          features: {
            'color-mod-function': {
              unresolved: 'warn'
            },
            'custom-properties': {
              preserve: false
            },
            'nesting-rules': true
          }
        }),
        typescale(),
        cssnano({
          autoprefixer: false
        })
      ]))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("assets/css/"));
});

/**
 * Serve site with Browsersync
 */
gulp.task("serve", ["jekyll-build"], () => {
  browserSync.init({
    files: [siteRoot + "/**"],
    open: "local",
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(
    [
      "**/*.html",
      "**/*.md",
      "**/*.yml",
      "**/*.css",
      "**/*.scss",
      "!assets/css/turetcss.css",
      "!_site/**/*",
      "!node_modules",
    ],
    { interval: 500 },
    ["jekyll-build"]
  );
});

gulp.task("default", ["serve"]);
