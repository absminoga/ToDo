"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade'),
    cssnano = require('gulp-cssnano'),
    browserSync = require('browser-sync'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    concat = require('gulp-concat'),
    imageMin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    jsUglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    fileinclude = require('gulp-file-include'),
    newer = require('gulp-newer'),
    watch = require('gulp-watch'),
    runSequence = require('run-sequence'),
    prettify = require('gulp-prettify'),
    reload = browserSync.reload; // Call compilation HTML


gulp.task('jade', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", gulp.src('app/jade/*.jade').pipe(changed('app/jade/*.jade')).pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
          })).pipe(jade()).pipe(prettify({
            indent_size: 2
          })).pipe(gulp.dest('app')).pipe(gulp.dest('dist')).pipe(browserSync.reload({
            stream: true
          })));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Call compilation scss to css

gulp.task('sass', function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", gulp.src('app/scss/**/*.scss').pipe(changed('app/scss/**/*.scss')).pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
          })).pipe(sass()) // .pipe(cssnano())
          .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
          })).pipe(gulp.dest('dist/css')).pipe(browserSync.reload({
            stream: true
          })));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // Css libs compilation to libs.min.css in app/css

gulp.task('css-libs', function _callee3() {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", gulp.src('app/libs/**/*.css').pipe(changed('app/libs/**/*.css')) // .pipe(cssnano())
          .pipe(concat('libs.min.css')).pipe(gulp.dest('dist/css')).pipe(browserSync.reload({
            stream: true
          })));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // Call compilation JS

gulp.task('js', function _callee4() {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", gulp.src('app/js/*.js').pipe(changed('app/js/*.js')) // .pipe(jsUglify())
          .pipe(gulp.dest('../dist/js')).pipe(browserSync.reload({
            stream: true
          })));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
});
gulp.task('js-libs', function _callee5() {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", gulp.src('app/libs/**/*.js').pipe(changed('app/libs/**/*.js')).pipe(concat('libs.min.js')) // .pipe(jsUglify())
          .pipe(gulp.dest('dist/js/')).pipe(browserSync.reload({
            stream: true
          })));

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
}); //Build image to folder dist/img

gulp.task('img', function () {
  return gulp.src('app/img/**/*').pipe(changed('app/img/**/*.*')).pipe(cache(imageMin({
    // .pipe(imageMin({ // Compress without cashing
    interlaced: true,
    progressive: true,
    svgoPlugins: [{
      removeViewBox: false
    }]
  }))).pipe(gulp.dest('dist/img'));
}); //Build Fonts to folder dist/fonts

gulp.task('fonts', function _callee6() {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", gulp.src('app/fonts/**/*.{eot,svg,ttf,woff,woff2}').pipe(changed('app/fonts/**/*.*')).pipe(gulp.dest('dist/fonts/')).pipe(browserSync.reload({
            stream: true
          })));

        case 1:
        case "end":
          return _context6.stop();
      }
    }
  });
}); //Перезагрузка страницы и создание сервера

gulp.task('browser-sync', function _callee7() {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          browserSync.init({
            server: {
              baseDir: 'dist'
            },
            notify: false,
            host: 'localhost',
            port: 8081,
            logPrefix: "Zubrin"
          });

        case 1:
        case "end":
          return _context7.stop();
      }
    }
  });
}); //Clean

gulp.task('clean', function _callee8() {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", gulp.src('dist', {
            read: false
          }).pipe(clean()));

        case 1:
        case "end":
          return _context8.stop();
      }
    }
  });
});
gulp.task('cleanImg', function _callee9() {
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.abrupt("return", gulp.src('dist/img', {
            read: false
          }).pipe(clean()));

        case 1:
        case "end":
          return _context9.stop();
      }
    }
  });
});
gulp.task('clear', function (callback) {
  return cache.clearAll();
});
gulp.task('watch', function _callee10() {
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
          gulp.watch('app/jade/**/*.jade', gulp.series('jade'));
          gulp.watch('app/libs/**/*.css', gulp.series('css-libs'));
          gulp.watch('app/js/*.js', gulp.series('js'));
          gulp.watch('app/img/**/*.*', gulp.series('img'));
          gulp.watch('app/fonts/**/*.*', gulp.series('fonts'));
          gulp.watch('app/*.html');

        case 7:
        case "end":
          return _context10.stop();
      }
    }
  });
});
gulp.task('build', gulp.series('jade', 'sass', 'css-libs', 'js-libs', 'js', 'img', 'fonts'));
gulp.task('default', gulp.series('browser-sync', 'sass', 'jade', 'js', 'css-libs', 'js-libs', 'fonts', 'img', 'watch'));