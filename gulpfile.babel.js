import gulp from 'gulp'
import {spawn} from 'child_process'
import hugoBin from 'hugo-bin'
import postcss from 'gulp-postcss'
import cssImport from 'postcss-import'
import cssnext from 'postcss-cssnext'
import inlineCss from 'gulp-inline-css'
import sass from 'gulp-sass'
import pug from 'gulp-pug'
import revall from 'gulp-rev-all'
import del from 'del'

import BrowserSync from 'browser-sync'
import webpack from 'webpack'
import webpackConfig from './webpack.conf'

const browserSync = BrowserSync.create()

// Hugo arguments
const hugoArgsDefault = ['-d', '../dist', '-s', 'site', '-v']

// Development tasks
gulp.task('hugo', (cb) => buildSite(cb))

// Compile pug to HTML
gulp.task('pug', function buildHTML () {
  return gulp.src(['./src/layouts/**/*.pug', '!./src/layouts/partials/**/*'])
    .pipe(pug({
      doctype: 'html',
      pretty: false
    }))
    .pipe(gulp.dest('./site/layouts'))
    .pipe(browserSync.stream())
})

// Compile CSS with PostCSS
gulp.task('css', function buildCss () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([cssImport({from: './src/css/main.css'}), cssnext()]))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})

// Compile Javascript
gulp.task('js', (cb) => {
  const myConfig = Object.assign({}, webpackConfig)

  webpack(myConfig, (err, stats) => {
    browserSync.reload()
    cb()
  })
})

// Move all fonts in a  directory
gulp.task('fonts', () => (
  gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(browserSync.stream())
))

gulp.task('assets', () => (
  gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(browserSync.stream())
))

// copy all rendered API docs
gulp.task('api-docs', () => (
  gulp.src('./api-docs/shins/**/*')
    .pipe(gulp.dest('./dist/api'))
    .pipe(browserSync.stream())
))

gulp.task('hash', () => {
  return gulp.src('./dist/**')
    .pipe(revall.revision({
      dontRenameFile: [/^\/favicon.ico$/g, '.html', 'sitemap.xml', 'robots.txt', '.woff', '.eot', '.ttf'],
      dontUpdateReference: ['.woff', '.eot', '.ttf']
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('inline', function () {
  return gulp.src('./dist/index.html')
    .pipe(inlineCss())
    .pipe(gulp.dest('./dist/index.html'))
})

gulp.task('serve', (done) => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
  done()
})

gulp.task('reload', (done) => {
  browserSync.reload()
  done()
})

gulp.task('watch', () => {
  gulp.watch('./src/layouts/**/*.pug', gulp.series('pug', 'reload'))
  gulp.watch('./src/js/**/*.js', gulp.series('js', 'reload'))
  gulp.watch('./src/scss/**/*.scss', gulp.series('css', 'reload'))
  gulp.watch('./src/fonts/**/*', gulp.series('fonts', 'reload'))
  gulp.watch('./site/**/*', gulp.series('hugo', 'reload'))
})

// Development server with browsersync
gulp.task('server', gulp.series(['pug', 'hugo', 'css', 'js', 'fonts', 'serve', 'watch']))

gulp.task('clean', () => {
  return del(['./dist/**/*'])
})

// Build/production tasks
gulp.task('render', gulp.series(['pug', 'css', 'js', 'fonts', 'hugo']))
gulp.task('build', gulp.series(['clean', 'render', 'hash']))

/**
 * Run hugo and build the site
 */
function buildSite (cb, options, environment = 'development') {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault

  process.env.NODE_ENV = environment

  return spawn(hugoBin, args, {stdio: 'inherit'}).on('close', (code) => {
    if (code === 0) {
      browserSync.reload()
      cb()
    } else {
      browserSync.notify('Hugo build failed :(')
      cb('Hugo build failed')
    }
  })
}
