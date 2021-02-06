const fs = require('fs-extra');
const path = require('path');

const basePath = path.resolve(__dirname, '..');

fs.copySync(path.resolve(basePath, 'src/scss'), path.resolve(basePath, 'lib/scss'));
