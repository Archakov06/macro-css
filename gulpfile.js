const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('build', () => {
  return gulp
    .src('./src/index.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
  gulp.watch('./src/*.scss', gulp.parallel('build'));
});
