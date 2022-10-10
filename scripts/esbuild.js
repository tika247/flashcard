const esbuild = require('esbuild');
const glob = require('glob');

const entry = glob.sync('src/ts/*.ts');

const output = 'dist/assets/js';

const args = [...process.argv].slice(2);

const arg = {
  watch: '--watch'
}

/**
 * watch
 * @type {import('esbuild').WatchMode}
 */
const isWatch = args.includes(arg.watch) ?
    {
      onRebuild(error, result) {
        if(error) {
          console.error('watch build failed:', error);
        } else {
          console.log('watch build succeeded:', result);
        }
      }
    } : false;

/**
 * option
 * @type{import('esbuild).BuildOptions}
 */
const options = {
  entryPoints : entry,
  outdir: output,
  bundle: true,
  minify: true,
  watch: isWatch
}

esbuild.build(options).then((result) => {
  if (isWatch) {
    console.log('watching...');
  }
});
