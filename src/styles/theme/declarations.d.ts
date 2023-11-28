import { MantineColorsTuple } from "@mantine/core"
import colors from "../variables/colors.mjs"

type CustomColors = keyof typeof colors;

declare module "@mantine/core" {
    export interface MantineThemeColorsOverride {
        colors: Record<CustomColors, MantineColorsTuple>;
    }
}