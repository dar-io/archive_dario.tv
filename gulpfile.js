// gulpfile.js
//

// Common
var del  = require('del');
var path = require('path');

// Gulp
var gulp = require('gulp');

// Gulp plugins
var browserSync = require('browser-sync').create('collider');
var flatten     = require('gulp-flatten');
var ghPages     = require('gulp-gh-pages');
var handlebars  = require('gulp-hb');
var htmlmin     = require('gulp-htmlmin');
var nano        = require('gulp-cssnano');
var plumber     = require('gulp-plumber');
var prefixer    = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var watch       = require('gulp-watch');

// Paths
var src   = 'project';
var build = 'distribute';

// BrowserSync
gulp.task('browser-sync', ['sass', 'assets', 'handlebars'], function () {

  browserSync.init({
    server: {
      baseDir: build,
    },
    ghostMode:       false,
    logPrefix:       'Collider',
    online:          false,
    open:            'local',
    reloadOnRestart: true,
    notify:          false,
    reloadDebounce:  1000,
  });
});

// HANDLEBARS
//

gulp.task('handlebars', function () {

  // Configure gulp-hb stream, register Matter partials and data
  var hbStream = handlebars({
    bustCache: true,
    debug: 0,
  })
    .helpers('collider/helpers/*.js')

    // common includes
    .partials(src + '/common/*.hbs', { base: path.join(__dirname, 'project/common') })

    // project matter
    // 3rd-party matter
    .partials([
      'project/matter/{atoms,molecules,organisms}/**/*.hbs',
      '*-matter/matter/{atoms,molecules,organisms}/**/*.hbs',
    ], { base: __dirname })

    // project data
    .data('project/data/{atoms,molecules,organisms}/*.json', { base:  __dirname })

    // 3rd-party matter
    .data('*-matter/data/{atoms,molecules,organisms}/*.json', { base: __dirname });

  return gulp
    .src(src + '/*.html')
    .pipe(plumber())
    .pipe(hbStream)
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest(build));
});

// SASS
// - main.scss

gulp.task('sass', function () {

  return gulp
    .src('collider/main.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))

      // Auto-prefix
      .pipe(prefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }))

      // Minify CSS and create Sourcemap
      .pipe(nano({ discardComments: { removeAll: true } }))
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest(build + '/css'))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});

// CLEAN
//
gulp.task('clean', function () {
  return del(build + '/**');
});

gulp.task('clean:assets', function () {

  // ** matches the parent directory too, so we must also ignore it
  return del([
    build + '/assets/**',
    '!' + build + '/assets',
  ]);
});

// ASSETS
//

gulp.task('assets', ['clean:assets'], function () {

  return gulp

    // project and 3rd-party assets
    .src('+(project|*-matter)/assets/**/*')
    .pipe(flatten({ includeParents: -1 }))
    .pipe(gulp.dest(build + '/assets'));
});

// WATCH
//

gulp.task('handlebars-rebuild', ['handlebars'], function () {
  browserSync.reload();
});

gulp.task('watch', function () {

  // handlebars
  watch([

    // project
    'project/*.html',

    // project and 3rd-party matter
    '+(project|*-matter)/data/{atoms,molecules,organisms}/*.json',
    '+(project|*-matter)/matter/{atoms,molecules,organisms}/**/*.hbs',

  ], function () {
    gulp.start('handlebars-rebuild');
  });

  // sass
  watch([

    // collider
    'collider/**/*.scss',

    // project and 3rd-party matter
    '+(project|*-matter)/**/*.scss',

  ], function () {
    gulp.start('sass');
  });

  // assets
  watch([

    // project and 3rd-party matter
    '+(project|*-matter)/assets/**/*',

  ], function () {
    gulp.start('assets');
  });
});

// DEPLOY
//

gulp.task('deploy', function () {

  return gulp
    .src(build + '/**/*')
    .pipe(ghPages());
});

// DEFAULT
//

gulp.task('default', function (cb) {
  runSequence('clean', 'browser-sync', 'watch', cb);
});
