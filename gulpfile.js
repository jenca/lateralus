var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: false, camelize: true });
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('html', function() {
	gulp.src('src/index.html')
	.pipe($.minifyHtml())
	.pipe(gulp.dest('app'))
	.on('error', $.util.log);
});

gulp.task('scripts', function() {
	browserify('./src/scripts/main.js')
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('app'))
	.on('error', $.util.log);
});

gulp.task("vendor", function(){
	$.bowerFiles()
	.pipe(gulp.dest('app'))
	.on('error', $.util.log);
});

gulp.task('styles', function() {
	gulp.src('src/styles/**')
	.pipe($.concat('app.css'))
	.pipe($.csso())
	.pipe(gulp.dest('app'))
	.on('error', $.util.log);
});

gulp.task('assets', function () {
	gulp.src('src/assets/**/*')
	.pipe(gulp.dest('app'))
	.on('error', $.util.log);
});

gulp.task('connect', $.connect.server({
	root: ['app'], port: 8080, livereload: true
}));

gulp.task('clean', function () {
	gulp.src('app', {read: false})
	.pipe($.clean({force: true}))
	.on('error', $.util.log);
});

gulp.task('watch', function() {
	gulp.watch('src/index.html', ['html']);
	gulp.watch('src/scripts/**/*', ['scripts']);
	gulp.watch('src/styles/**/*', ['styles']);
	gulp.watch('src/assets/**/*', ['assets']);
	gulp.watch('app/*', function (e) {
		gulp.src(e.path)
		.pipe($.connect.reload());
	});
});

gulp.task('build', ['html', 'scripts', 'vendor', 'styles', 'assets']);

gulp.task('default', ['build', 'connect', 'watch']);
