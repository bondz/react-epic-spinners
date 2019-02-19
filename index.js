'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/react-epic-spinners.cjs.min.js');
} else {
  module.exports = require('./dist/react-epic-spinners.cjs.js');
}
