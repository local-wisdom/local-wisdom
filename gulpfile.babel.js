import gulp from 'gulp';
import markdown from 'gulp-markdown-to-json';
import gutil from 'gulp-util';


gulp.task('markdown', () => {
    gulp.src('./posts/**/*.md')
        .pipe(gutil.buffer())
        .pipe(markdown('blogposts.json'))
        .pipe(gulp.dest('./app/data/'));
});

gulp.task('default', ['markdown']);
