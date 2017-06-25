var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload = browserSync.relaod;

/* Task to compile less CSS */
gulp.task('compile-less',function(){
    gulp.src('./src/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./destro/css/'));
});

/* Task to watch less changes */
gulp.task('watch-less',function(){
    gulp.watch('./src/less/*.less' , ['compile-less']);
});
 
/* Task when running `gulp` from terminal */
gulp.task('default', ['watch-less']);