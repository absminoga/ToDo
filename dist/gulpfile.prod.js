"use strict";var gulp=require("gulp"),sass=require("gulp-sass"),autoprefixer=require("gulp-autoprefixer"),plumber=require("gulp-plumber"),jade=require("gulp-jade"),cssnano=require("gulp-cssnano"),browserSync=require("browser-sync"),cache=require("gulp-cache"),changed=require("gulp-changed"),concat=require("gulp-concat"),imageMin=require("gulp-imagemin"),notify=require("gulp-notify"),jsUglify=require("gulp-uglify"),clean=require("gulp-clean"),fileinclude=require("gulp-file-include"),newer=require("gulp-newer"),watch=require("gulp-watch"),runSequence=require("run-sequence"),prettify=require("gulp-prettify"),reload=browserSync.reload;gulp.task("jade",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gulp.src("app/jade/*.jade").pipe(changed("app/jade/*.jade")).pipe(plumber({errorHandler:notify.onError("Error: <%= error.message %>")})).pipe(jade()).pipe(prettify({indent_size:2})).pipe(gulp.dest("app")).pipe(gulp.dest("dist")).pipe(browserSync.reload({stream:!0})));case 1:case"end":return e.stop()}})}),gulp.task("sass",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gulp.src("app/scss/**/*.scss").pipe(changed("app/scss/**/*.scss")).pipe(plumber({errorHandler:notify.onError("Error: <%= error.message %>")})).pipe(sass()).pipe(autoprefixer(["last 15 versions","> 1%","ie 8","ie 7"],{cascade:!0})).pipe(gulp.dest("dist/css")).pipe(browserSync.reload({stream:!0})));case 1:case"end":return e.stop()}})}),gulp.task("css-libs",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gulp.src("app/libs/**/*.css").pipe(changed("app/libs/**/*.css")).pipe(concat("libs.min.css")).pipe(gulp.dest("dist/css")).pipe(browserSync.reload({stream:!0})));case 1:case"end":return e.stop()}})}),gulp.task("js",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gulp.src("app/js/*.js").pipe(changed("app/js/*.js")).pipe(gulp.dest("../dist/js")).pipe(browserSync.reload({stream:!0})));case 1:case"end":return e.stop()}})}),gulp.task("js-libs",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gulp.src("app/libs/**/*.js").pipe(changed("app/libs/**/*.js")).pipe(concat("libs.min.js")).pipe(gulp.dest("dist/js/")).pipe(browserSync.reload({stream:!0})));case 1:case"end":return e.stop()}})}),gulp.task("img",function(){return gulp.src("app/img/**/*").pipe(changed("app/img/**/*.*")).pipe(cache(imageMin({interlaced:!0,progressive:!0,svgoPlugins:[{removeViewBox:!1}]}))).pipe(gulp.dest("dist/img"))}),gulp.task("fonts",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gulp.src("app/fonts/**/*.{eot,svg,ttf,woff,woff2}").pipe(changed("app/fonts/**/*.*")).pipe(gulp.dest("dist/fonts/")).pipe(browserSync.reload({stream:!0})));case 1:case"end":return e.stop()}})}),gulp.task("browser-sync",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:browserSync.init({server:{baseDir:"dist"},notify:!1,host:"localhost",port:8081,logPrefix:"Zubrin"});case 1:case"end":return e.stop()}})}),gulp.task("clean",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gulp.src("dist",{read:!1}).pipe(clean()));case 1:case"end":return e.stop()}})}),gulp.task("cleanImg",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gulp.src("dist/img",{read:!1}).pipe(clean()));case 1:case"end":return e.stop()}})}),gulp.task("clear",function(e){return cache.clearAll()}),gulp.task("watch",function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:gulp.watch("app/scss/**/*.scss",gulp.series("sass")),gulp.watch("app/jade/**/*.jade",gulp.series("jade")),gulp.watch("app/libs/**/*.css",gulp.series("css-libs")),gulp.watch("app/js/*.js",gulp.series("js")),gulp.watch("app/img/**/*.*",gulp.series("img")),gulp.watch("app/fonts/**/*.*",gulp.series("fonts")),gulp.watch("app/*.html");case 7:case"end":return e.stop()}})}),gulp.task("build",gulp.series("jade","sass","css-libs","js-libs","js","img","fonts")),gulp.task("default",gulp.series("browser-sync","sass","jade","js","css-libs","js-libs","fonts","img","watch"));