// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted fix lỗi của gulp bằng cái này được nè
var gulp = require('gulp');
const pug = require('gulp-pug-3');
const imageMin = require('gulp-imagemin');//npm install --save-dev gulp-imagemin@7.1.0
const del = require('del');// npm install del --save-dev
//biên dịch pug thành thành html

gulp.task('pug',function() {
    return gulp.src('src/page/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('public/page'))
});

//thiếu tối ưu ảnh
gulp.task('imageMin', function () {
    return gulp.src('src/img/*')
	.pipe(imageMin())
	.pipe(gulp.dest('public/dist/src/img'))
});

gulp.task('clean-img',async function() {
    return del.sync('public/dist/src/img/*');
})
gulp.task('clean-html',async function() {
    return del.sync('public/page');
})
gulp.task('watch',gulp.series(['pug','imageMin'], async function (){
    gulp.watch(['src/page/**/*.pug'],gulp.series('clean-html','pug'));
    gulp.watch(['src/scss/component/**/*.scss'], gulp.series('clean-html','pug')); 
    // Other watchers
    gulp.watch(['src/img/**/*'],gulp.series('clean-img','imageMin'));
    gulp.watch(['src/page/**/*.pug'],gulp.series('clean-img','imageMin'));
    gulp.watch(['src/**/*.js'],gulp.series('clean-img','imageMin'));
}));
