var gulp      = require('gulp'),
    prefix    = require('gulp-autoprefixer'),
    jade      = require('gulp-jade'),
    rename    = require('gulp-rename'),
    sass      = require('gulp-ruby-sass'),
    browser   = require('browser-sync'),
    shell     = require('gulp-exec'),
    cleancss  = require('gulp-cssbeautify'),
    concat    = require('gulp-concat'),
    trim      = require('gulp-trim');


gulp.task('sass-index', function () {
  return sass('_source/_sass/index.sass')
  .on('error', sass.logError)
  .pipe(prefix())
  .pipe(cleancss())
  .pipe(rename('index.css'))
  .pipe(gulp.dest('_source/assets'));
});


gulp.task('sass-posts', function () {
  return sass('_source/_sass/posts.sass')
  .on('error', sass.logError)
  .pipe(prefix())
  .pipe(cleancss())
  .pipe(rename('posts.css'))
  .pipe(gulp.dest('_source/assets'));
});


gulp.task('jade', function() {
  return gulp.src('_source/_jade/*/*.*')
  .pipe(jade({
    pretty: true
  }))
  .pipe(trim({
    leading: false,
  }))
  .pipe(gulp.dest('_source/'));
});


gulp.task('browsersync', function () {
  browser.init({
    server: {
      baseDir: './_site'
    }
  });
});


gulp.task('js', function () {
  return gulp.src('_source/assets/_js/**/*.js')
  .pipe(concat('functions.js'))
  .pipe(gulp.dest('_source/assets/'));
});


gulp.task('jekyll-build', function () {
  gulp.src('./')
  .pipe(shell('jekyll build'));
});


gulp.task('build', ['sass-index', 'sass-posts', 'jade', 'js', 'jekyll-build'], function () {
    // blank function
});


gulp.task('default', ['sass-index', 'sass-posts', 'jade', 'js', 'browsersync'], function() {
  gulp.watch('_source/_sass/**/*.*', ['sass-index', 'sass-posts']);
  gulp.watch('_source/_jade/**/*.*', ['jade']);
  gulp.watch('_source/assets/_js/*.js', ['js']);
  gulp.watch(['_source/assets/*.*', '_source/_static/**/*.*', '_source/_includes/**/*.*', '_source/_layouts/**/*.*'], ['jekyll-build']);
  gulp.watch('_site/**/*.*').on('change', browser.reload);
});
