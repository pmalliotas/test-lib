import process from "node:process"
import typescript from "rollup-plugin-typescript2"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import packageJson from "./package.json" assert { type: "json" }
import postcss from "rollup-plugin-postcss"
import copy from "rollup-plugin-copy"
import autoprefixer from "autoprefixer"
import svgr from "@svgr/rollup"
import generatePackageJson from "rollup-plugin-generate-package-json"
import replace from "@rollup/plugin-replace"
import { getSubpathFolders } from "./scripts/buildUtils.mjs"

const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
]

const commonPlugins = [
  typescript({
    tsconfig: "./tsconfig.build.json",
    useTsconfigDeclarationDir: true,
  }),

  nodeResolve(),
  commonjs(),
  postcss({
    extract: true,
    modules: true,
    minimize: true,
    importLoaders: 1,
    plugins: [
      autoprefixer(),
    ],
    config: {
      path: "./postcss.config.js"
    },
    inject: {
      insertAt: "top",
    },
    extensions: [".css"]
  }),
  replace({
    __IS_DEV__: process.env.NODE_ENV === "development",
    preventAssignment: true
  }),
  svgr({
    icon: true,
    typescript: true,
    prettier: true
  }),
  terser(),
  copy({
    targets: [
      { src: "src/styles/styles.css", dest: "dist/styles" },
    ]
  })
]

// Returns rollup configuration for a given subpath
function subpath(commonPlugins, folder) {
  return {
    input: `src/${folder}/index.ts`,
    output: [
      {
        file: `dist/${folder}/index.esm.js`,
        // exports: "named",
        format: "esm",
      },
      {
        file: `dist/${folder}/index.cjs.js`,
        // exports: "named",
        format: "cjs",
      }
    ],
    plugins: [
      ...commonPlugins,
      generatePackageJson({
        baseContents: {
          name: `${packageJson.name}/${folder}`,
          private: true,
          main: "./index.cjs.js",
          module: "./index.esm.js",
          types: "./index.d.ts",
          peerDependencies: packageJson.peerDependencies,
        },
        outputFolder: `dist/${folder}/`
      }),
    ],
    // Don't bundle node_modules and ../utils
    //
    // We should also exclude relative imports of other components, but a trivial exclude of /\.\./ does not work
    // It may require changes to the way the components are exported
    external,
  }
}


export default [
  // Build all components in ./src/*
  ...getSubpathFolders("./src").map((folder) => subpath(commonPlugins, folder)),

  // Build the main file that includes all components and utils
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.esm.js",
        // exports: "named",
        format: "esm",
      },
      {
        file: "dist/index.cjs.js",
        // exports: "named",
        format: "cjs",
      }
    ],
    plugins: commonPlugins,
    external,
    onwarn: function (warning, warn) {
      if (warning.code === "THIS_IS_UNDEFINED") {
        return
      }
      warn(warning)
    },
  },
]