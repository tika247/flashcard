const browserSync = require('browser-sync');
const connectSSI = require('connect-ssi');
const path = require('path');
const { start } = require('repl');

/**
 * setting
 * @type {import('browser-sync').Options}
 */
const bsOpt = {
  files: [
    'dist/**/*.html',
    'dist/**/*.css',
    'dist/**/*.js'
  ],
  startPath: '/_mlc/index.html',
  server: {
    baseDir: 'dist/',
    middleware: [
      connectSSI({
        baseDir: path.join('dist/'),
        ext: '.html'
      })
    ]
  }
};

browserSync.init(bsOpt);