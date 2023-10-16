import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "rollup-plugin-babel"

export default [
  {
    input: {
      core: "src/components/core/index.ts",
      dates: "src/components/dates/index.ts",
      forms: "src/components/forms/index.ts",
      hooks: "src/hooks/index.ts",
      index: "src/index.ts"
    },
    output:
    {
      dir: "dist",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", declarationDir: "dist" }),
      terser(),
      // babel({
      // exclude: 'node_modules/**', // Exclude node_modules
      // babelHelpers: 'runtime',
      // presets: [
      //   ['@babel/preset-env', { targets: 'last 2 versions, > 1%' }],
      //   '@babel/preset-react',
      // ],
      // plugins: ['@babel/plugin-transform-runtime'],
      // }),
    ],
    external: [
      "react",
      "react-dom",
      "react-hook-form",
      "autoprefixer",
      "dayjs",
      "postcss",
      "tailwindcss",
      "zod"
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];