import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

const input = 'src/index.js';
const globalName = 'ReactEpicSpinners';

function external(id) {
  return !id.startsWith('.') && !id.startsWith('/');
}

const cjs = [
  {
    input,
    output: { file: `dist/${pkg.name}.cjs.js`, format: 'cjs' },
    external,
    plugins: [
      babel({ exclude: /node_modules/ }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
    ]
  },
  {
    input,
    output: { file: `dist/${pkg.name}.cjs.min.js`, format: 'cjs' },
    external,
    plugins: [
      babel({ exclude: /node_modules/ }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      uglify()
    ]
  }
];

const esm = [
  {
    input,
    output: { file: `dist/${pkg.name}.esm.js`, format: 'esm' },
    external,
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]]
      }),
      sizeSnapshot()
    ]
  }
];

const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
  'styled-components': 'StyledComponents'
};

const umd = [
  {
    input,
    output: {
      file: `dist/${pkg.name}.umd.js`,
      format: 'umd',
      name: globalName,
      globals
    },
    external,
    plugins: [
      babel({
        exclude: /node_modules/,
      }),
      resolve(),
      commonjs({
        include: /node_modules/
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      sizeSnapshot()
    ]
  },
  {
    input,
    output: {
      file: `dist/${pkg.name}.umd.min.js`,
      format: 'umd',
      name: globalName,
      globals
    },
    external,
    plugins: [
      babel({
        exclude: /node_modules/,
      }),
      resolve(),
      commonjs({
        include: /node_modules/
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot(),
      uglify()
    ]
  }
];

let config;
switch (process.env.BUILD_ENV) {
  case 'cjs':
    config = cjs;
    break;
  case 'esm':
    config = esm;
    break;
  case 'umd':
    config = umd;
    break;
  default:
    config = cjs.concat(esm).concat(umd);
}

export default config;
