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

import packageJson from "./package.json" assert { type: "json"}

// Check if we're in development mode
const isDev = process.env.NODE_ENV !== 'production';

const inputs = {
  index: 'src/index.ts',
  core: 'src/core/index.ts',
  dates: 'src/dates/index.ts',
  forms: 'src/forms/index.ts',
  hooks: 'src/hooks/index.ts',
};

const outputs = Object.keys(inputs).map(name => ({
  input: inputs[name],
  output: [
    {
      dir: `dist/${name}`,
      format: 'esm',
      sourcemap: true, // sourcemaps should be output as separate files
      // entryFileNames:"[name].js"
    },
  ],
  // Apply plugins
  plugins: [

    peerDepsExternal(),
    resolve(),
    commonjs(),
    json(),
    image(),

    typescript({
      tsconfig: "./tsconfig.json",
      declarationDir: `dist/${name}`
    }),

    // Handle .css, .scss, .less files
    // postcss({
    //   extract: false,
    //   modules: true,
    //   use: ['sass'],
    // }),

    terser(),

  ],
  external: [...Object.keys(packageJson.peerDependencies)],
}))

export default outputs;
