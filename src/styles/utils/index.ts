import { generateColors } from "@mantine/colors-generator"
import { CSSVariablesResolver } from "@mantine/core"

export enum SIZE_VARIANTS {
    "xs" = "xs",
    "sm" = "sm",
    "md" = "md",
    "lg" = "lg",
    "xl" = "xl",
    "2xl" = "2xl",
    "3xl" = "3xl",
    "4xl" = "4xl",
    "5xl" = "5xl",
    "6xl" = "6xl",
}

export const resolver: CSSVariablesResolver = (theme) => ({
    light: {},
    dark: {},
    variables: generateClasses(theme.colors)
})

const colors = {
    "deep-koamaru": generateColors("#302F59"),
    "mexican-pink": generateColors("#E3077F"),
    "majorelle-blue": generateColors("#683DE4"),
    "eerie-black": generateColors("#12112C"),
    "cool-grey": generateColors("#8B8BA2"),
    "silver-sand": generateColors("#BDBCCA"),
    "bright-gray": generateColors("#EEEEF2"),
    "ghost-white": generateColors("#FAFAFD"),
    "auqamarine": generateColors("#62E5B6"),
    "crayola-light": generateColors("#FCDB67"),
    "persian-pink": generateColors("#ED74B6"),
    "pale-violet": generateColors("#C0AAFF"),
    "skye-blue": generateColors("#84A6FF"),
    "gainsboro": generateColors("#DEDEE4"),
    "harlequin-green": generateColors("#32DB17"),
    "coral-red": generateColors("#F43E3E"),
    "amazon": generateColors("#418454"),
    "crayola-dark": generateColors("#F4CE49"),
    "jasper": generateColors("#DB3840"),
    "cyan-blue-azure": generateColors("#4F75C1")
}


const generateClasses = (c: typeof colors) => {
    const classes: Record<string, string> = {}

    Object.keys(c).map((colorName) => {
        c[colorName as keyof typeof colors].forEach((color, i) => {
            classes[`--mantine-color-${colorName}-${i}`] = color
        })
    })
    return classes
}