/**
 * Created by Administrator on 2017/5/10.
 */
const gulp =require('gulp');
const babel =require('gulp-babel');

gulp.task('convert1JS', function () {
    return gulp.src('app/_js/*.js')
        .pipe(babel({
            presets:['es2015']
        }))
        .pipe(gulp.dest('app/js'))
});
gulp.task('convert2JS', function () {
    return gulp.src('app/_js/controllers/*.js')
        .pipe(babel({
            presets:['es2015']
        }))
        .pipe(gulp.dest('app/js/controllers'))
});
gulp.task('start',['convert1JS','convert2JS']);