var path = require('path')
var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var browserSync = require('browser-sync')
var reload = browserSync.reload

var root = path.resolve(__dirname, 'FrontEnd/')
var browser_support = ['last 2 versions']

var src = {
  server: path.resolve(root, './'),
  css: path.resolve(root, 'css/'),
  scss: path.resolve(root, 'css/scss/'),
  img: path.resolve(root, 'img/'),
  js: path.resolve(root, 'js/'),
  refresh: [path.resolve(root, '**/*.html'), path.resolve(root, 'css/*.css'), path.resolve(root, 'js/*.js')]
}

/**
 * Default gulp's task, start BrowserSync
 */
gulp.task('default', ['sass'], function () {
  var opts = {
    notify: false,
    open: false
  }
  if (src['proxy']) {
    opts['proxy'] = src.proxy
  } else {
    opts['server'] = {
      baseDir: src.server
    }
  }
  browserSync(opts)
  $.watch(src.scss + '/**/*.scss', function () {
    return gulp.start('sass')
  })
  return $.watch(src.refresh).on('change', reload)
})

/**
 * Compile .scss files and add vendor prefixes
 */
gulp.task('sass', function () {
  return gulp.src(src.scss + '/**/*.scss')
  .pipe($.plumber())
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.autoprefixer({
    browsers: browser_support
  }))
  .pipe(gulp.dest(src.css))
})
