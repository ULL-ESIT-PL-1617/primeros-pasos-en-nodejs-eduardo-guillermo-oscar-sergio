var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var task = require('shell-task');
var wiki = require('./package.json').repository.wiki;

gulp.task('deploy', function() {
  return gulp.src('./txt/**/*')
  	.pipe(ghPages());
});

gulp.task('deploygb', function() {
  return gulp.src('')
    .pipe(shell(['node ./scripts/deploy-gibook.js']));
});
/*
gulp.task('wiki', function() {
	return gulp.src('')
		.pipe(shell(['./scripts/losh generate-wiki']));
});
*/
gulp.task('deploygh', function() {
  return gulp.src('')
		.pipe(shell(['node ./scripts/deploy-gh-pages.js']))
});

gulp.task('build', function() {
  return gulp.src('')
		.pipe(shell(['sudo gitbook build ./txt ./gh-pages']));
});

gulp.task('buildwiki', function() {
  return gulp.src('')
		.pipe(shell(['node ./scripts/generate-wiki.js']));
});

gulp.task('deploywiki', function() {
  return gulp.src('').pipe(shell([
      'cd wiki',
      'rm -rf .git',
      'git init',
      'git add .',
      'git commit -m "Deploy to Wiki"',
      'git remote add origin https://github.com/ULL-ESIT-PL-1617/primeros-pasos-en-nodejs-eduardo-guillermo-oscar-sergio',
      'git remote add wiki https://github.com/ULL-ESIT-PL-1617/primeros-pasos-en-nodejs-eduardo-guillermo-oscar-sergio.wiki.git',
      'git push --force wiki master:master'
  ]));
});

gulp.task('server', function() {
  return gulp.src('')
    .pipe(shell(['sudo node server.js']));
});
