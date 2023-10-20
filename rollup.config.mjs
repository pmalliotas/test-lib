import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const rollupConfig = {
  input: 'src/index.ts',
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
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
      babelHelpers: 'bundled',
    }),

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
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    warn(warning);
  },
};

export default rollupConfig;
