const { task } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function compilaSass()
{
    return gulp
        .src('css/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer ({
                browsers: ["last 2 versions"],
                cascade: false
        }))
        .pipe(gulp.dest('css/'))
}


gulp.task('activeSass', compilaSass);

function watchGulp()
{
    gulp.watch('css/scss/*.scss', compilaSass);
}

gulp.task('default', watchGulp);