/**
 * Created by Administrator on 2017/5/10.
 */
const gulp =require('gulp');
const babel =require('gulp-babel');
const concat=require('gulp-concat');

gulp.task('convert1OuterJS', function () {
    return gulp.src('app/_js/*.js')
        .pipe(babel({
            presets:['es2015']
        }))
        .pipe(gulp.dest('app/js'))
});
gulp.task('convertControllersJS', function () {
    return gulp.src('app/_js/controllers/*.js')
        .pipe(babel({
            presets:['es2015']
        }))
        .pipe(gulp.dest('app/js/controllers'))
});
gulp.task('start',['convert1JS','convert2JS']);
gulp.task('concatCtrls', function () {
    gulp.src('app/js/controllers/*.js')
        .pipe(concat('controllers.js'))
        .pipe(gulp.dest('app/js'))
});