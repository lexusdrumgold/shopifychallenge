const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

//error handling
function handleError(error) {
  console.log(error.toString());
  this.emit('end');
}

//compile sass into css & auto-inject into browsers
gulp.task('styles', function() {
  return gulp.src('./styles/sass/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer())
    .on('error', handleError)
    .pipe(gulp.dest('./styles/css/'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./styles/css/'))
    .pipe(browserSync.reload({stream:true}));
});

//minify js in src dir
gulp.task('compress', function() {
  gulp.src('./js/main.js')
    .pipe(babel({presets: ['env']}))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    open: false,
    browser: 'google chrome'
  });
});

//watch
gulp.task('watch', function(){
  gulp.watch('./src/styles/sass/**/*.sass').on('change', gulp.series('styles'));
  gulp.watch("./src/js/").on('change', gulp.series('compress'));
  gulp.watch("./").on('change', browserSync.reload);
})

gulp.task('default', gulp.parallel('styles', 'compress', 'serve', 'watch', function(done) {
    done();
}));
