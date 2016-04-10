var path = require('path')
var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var browserSync = require('browser-sync')
var reload = browserSync.reload

var root = path.resolve(__dirname)

var src = {
  server: path.resolve(root, './'),
  css: path.resolve(root, 'css/'),
  img: path.resolve(root, 'img/'),
  js: path.resolve(root, 'js/'),
  refresh: [path.resolve(root, '**/*.html'), path.resolve(root, 'css/*.css'), path.resolve(root, 'js/*.js')]
}


gulp.task('default', function () {
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
  return $.watch(src.refresh).on('change', reload)
})
