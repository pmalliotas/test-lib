/* eslint-disable no-console */
import { readFile, writeFile, copyFile } from "node:fs/promises"
import { basename, join, resolve } from "node:path"
import process from "node:process"
const packagePath = process.cwd()
const distPath = join(packagePath, "./dist")

const writeJson = (targetPath, obj) => writeFile(targetPath, JSON.stringify(obj, null, 2), { encoding: "utf8" })

async function createPackageFile() {
    const packageData = await readFile(resolve(packagePath, "./package.json"), { encoding: "utf8" })
    const { scripts, devDependencies, ...packageOthers } = JSON.parse(packageData)
    const newPackageData = {
        ...packageOthers,
        private: false,
        typings: "./index.d.ts",
        main: "./index.cjs.js",
        module: "./index.esm.js",
        "exports": {
            ".": {
                "import": {
                    "types": "./index.d.ts",
                    "default": "./index.esm.js"
                },
                "require": {
                    "types": "./index.d.ts",
                    "default": "./index.cjs.js"
                },
            },
        }
    }

    const targetPath = resolve(distPath, "./package.json")

    await writeJson(targetPath, newPackageData)
    console.log(`Created package.json in ${targetPath}`)
}

async function includeFileInBuild(file) {
    const sourcePath = resolve(packagePath, file)
    const targetPath = resolve(distPath, basename(file))
    await copyFile(sourcePath, targetPath)
    console.log(`Copied ${sourcePath} to ${targetPath}`)
}

async function run() {
    try {
        await createPackageFile()
        // await includeFileInBuild("./README.md")
        // await includeFileInBuild('../../LICENSE');
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

run()
