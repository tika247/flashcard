const fs = require('fs');

/**
 * remove dist folder
 */
fs.rmSync('dist', {
  force: true,
  recursive: true
});