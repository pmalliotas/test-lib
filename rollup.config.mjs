import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json' assert { type: "json"}
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy'
import autoprefixer from "autoprefixer";

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const rollupConfig = {
  input: 'src/lib/index.ts',
  output: {
    dir: "dist",
    format: 'es',
    sourcemap: true,
  },
  external,
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types/',
      outDir: 'dist',
    }),

    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modulesOnly: true,
    }),
    commonjs(),

    json(),
    // babel({
    //   exclude: 'node_modules/**',
    //   presets: ['@babel/preset-env'],
    //   babelHelpers: 'bundled',
    // }),
    postcss({
      // Extract CSS to the same location where the JS file is generated
      extract: true,
      // Use CSS modules
      modules: true,
      // Minimize CSS - you might want to use a dedicated plugin for this
      minimize: true,
      // Allow importing from node_modules directory
      importLoaders: 1,
      plugins: [
        autoprefixer(),
      ]
    }),
    terser(),
    copy({
      targets: [
        { src: 'src/lib/styles/styles.css', dest: 'dist/styles' },
      ]
    })
  ],
  onwarn: function (warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    warn(warning);
  },
};

export default rollupConfig;
