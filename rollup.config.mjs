// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import del from 'rollup-plugin-delete';

// Check if we're in development mode
const isDev = process.env.NODE_ENV !== 'production';

export default {
  input: 'src/index.ts', // our source file
  output: [
    {
      dir: 'dist', // the directory for output files
      format: 'esm', // suitable format for tree-shaking
      sourcemap: true, // sourcemaps should be output as separate files
    },
  ],
  // Apply plugins
  plugins: [
    // Delete the previous build files
    del({ targets: 'dist/*' }),

    // Preferably use this at the start of your plugins list to automatically exclude peer dependencies from your bundle
    peerDepsExternal(),

    // Locate modules using the Node resolution algorithm, for using third-party modules in node_modules
    resolve(),

    // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
    commonjs(),

    // Handle json files
    json(),

    // Handle image files
    image(),

    // Compile TypeScript files
    typescript({
      tsconfig: "./tsconfig.json",
      declarationDir: "dist"
    }),

    // Handle .css, .scss, .less files
    // postcss({
    //   extract: false,
    //   modules: true,
    //   use: ['sass'],
    // }),

    // Replace strings in files while bundling
    // replace({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //   preventAssignment: true,
    // }),

    // Minify the bundle
    terser(),

    // Serve and live reload in development mode
    ...(isDev
      ? [
        serve({
          open: true,
          contentBase: 'dist',
          historyApiFallback: true,
          host: 'localhost',
          port: 3000,
        }),
        livereload({ watch: 'dist' }),
      ]
      : []),
  ],
  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment', etc.)
  external: [/* 'react', 'react-dom' */],
};
