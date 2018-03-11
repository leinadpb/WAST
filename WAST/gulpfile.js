var gulp = require("gulp"),
    fs = require("fs"),
    sass = require("gulp-sass");

gulp.task("site-sass", function () {
    return gulp.src('Styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('wwwroot/css'));
});
gulp.task("bootstrap-sass", function () {
    return gulp.src('Styles/bootstrap/bootstrap.scss')
        .pipe(sass())
        .pipe(gulp.dest('wwwroot/css'));
});