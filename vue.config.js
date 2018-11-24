'use strict';
const glob = require('glob');
const pages = {};

glob.sync('./src/pages/**/main.js').forEach((path) => {
  const chunk = path.split('./src/pages/')[1].split('/main.js')[0];
  pages[chunk] = {
    entry: path,
    template: 'public/index.html',
    chunks: [ 'chunk-vendors', 'chunk-common', chunk ],
  };
});

module.exports = {
  pages,
};
