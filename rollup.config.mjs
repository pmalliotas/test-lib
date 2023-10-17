import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import babel from "@rollup/plugin-babel"
import alias from "@rollup/plugin-alias"
import { visualizer } from "rollup-plugin-visualizer"

import packageJson from "./package.json" assert { type: "json"}

const inputs = {
  ".": {
    entryFile: "src/index.ts",
  },
  core: {
    entryFile: 'src/core/index.ts'
  },
  // dates: {
  //   entryFile: 'src/dates/index.ts'
  // },
  // forms: {
  //   entryFile: 'src/forms/index.ts'
  // },
  // hooks: {
  //   entryFile: 'src/hooks/index.ts'
  // },
}

const outputs = Object.keys(inputs).map(name => ({
  input: inputs[name].entryFile,
  output: {
    file: `dist/${name}/index.js`,
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".ts", ".tsx"]
    }),
    commonjs(),
    terser(),
    json(),
    image(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: `dist/${name}/types`,
      outDir: `dist/${name}/types`,
      resolveJsonModule: true,
      include: [`src/${name}/**/*`],
    }),
    // babel({
    //   babelHelpers: 'bundled',
    //   extensions: ['.ts', '.tsx'],
    //   exclude: /node_modules/,
    //   include: [`src/${name}/**/*`]
    // }),
    alias({
      entries: [
        { find: 'src', replacement: './src' },
      ],
    }),
    visualizer({ filename: 'dist/stats.html' }),
  ],
  external: Object.keys(packageJson.peerDependencies || {}),
  onwarn(warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      return
    }
    warn(warning)
  },
  treeshake: {
    moduleSideEffects: 'no-external'
  },
}))

export default outputs
