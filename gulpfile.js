const { watch, series, src, dest } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

function css(cb) {
  return src('res/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('res/css/'));
  cb();
}

exports.default = function () {
  watch('res/scss/*.scss', css);
};
