import fs from "fs"
import colors from "../variables/colors.mjs"

const getVariables = () => {
    const classes = {}

    Object.keys(colors).map((colorName) => {
        colors[colorName].forEach((color, i) => {
            classes[`--mantine-color-${colorName}-${i}`] = color
        })
    })
    return classes
}

const variables = getVariables()

const cssContent = `
:root {
${Object.keys(variables).map((key) => `\t${key}: ${variables[key]};`).join("\n")}
}
`

try {
    fs.writeFileSync("src/styles/generated/styles.css", cssContent, "utf8")
    console.log("CSS file has been saved.")
} catch (err) {
    console.error("An error occurred while writing CSS to file.", err)
}