var gulp      = require('gulp'),
    prefix    = require('gulp-autoprefixer'),
    jade      = require('gulp-jade'),
    rename    = require('gulp-rename'),
    sass      = require('gulp-ruby-sass'),
    browser   = require('browser-sync'),
    shell     = require('gulp-exec'),
    trim      = require('gulp-trim');


gulp.task('sass', function () {
  return sass('_source/_sass/imports.sass')
  .on('error', sass.logError)
  .pipe(prefix())
  .pipe(rename('index.css'))
  .pipe(gulp.dest('_source/assets'));
});


gulp.task('jade', function() {
  return gulp.src('_source/_jade/**/*.*')
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


gulp.task('build', function () {
  gulp.src('./')
  .pipe(shell('jekyll build'));
});


gulp.task('default', ['sass', 'jade', 'browsersync'],function() {
  gulp.watch('_source/_sass/**/*.*', ['sass']);
  gulp.watch('_source/_jade/**/*.*', ['jade']);
  gulp.watch(['_source/assets/**/*.*', '_source/_static/**/*.*', '_source/_includes/**/*.*', '_source/_layouts/**/*.*'], ['build']);
  gulp.watch('_site/**/*.*').on('change', browser.reload);
});
