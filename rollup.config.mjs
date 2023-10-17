import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import json from '@rollup/plugin-json';

const packageJson = require("./package.json");

export default {
  input: "src/index.ts", // Or your entry file
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declarationDir: './dist/types',
      declaration: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),
    json(),
    terser(),
  ],
  external: Object.keys(packageJson.peerDependencies || {})
};
