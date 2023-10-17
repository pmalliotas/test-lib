// Importing the necessary plugins
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

// List of external dependencies, typically including peerDependencies
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const rollupConfig = {
  input: 'src/index.ts', // your library entry point
  external,
  plugins: [
    // Compile TypeScript files
    typescript({
      tsconfig: './tsconfig.json', // your tsconfig file
      declaration: true,
      declarationDir: 'dist/types/',
      outDir: 'dist',
    }),
    
    // Allows node_modules resolution
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modulesOnly: true, // Only use the ES module variant of dependencies
    }),

    // Allows verification of entry point and all imported dependencies
    commonjs(),

    // Convert .json files to ES6 modules
    json(),
    // Transpile to ES5, mainly for compatibility reasons
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
      babelHelpers: 'bundled',
    }),

    // Minify, but only in production
    terser(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  onwarn: function (warning, warn) {
    // Skip certain warnings
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    // Use default for everything else
    warn(warning);
  },
};

export default rollupConfig;
