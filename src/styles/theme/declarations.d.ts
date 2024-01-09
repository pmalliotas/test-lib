import { MantineColorsTuple } from "@mantine/core"
import COLORS from "../variables/colors.mjs"

type CustomColors = keyof typeof COLORS;

declare module "@mantine/core" {
    export interface MantineThemeColorsOverride {
        colors: Record<CustomColors, MantineColorsTuple>;
    }
}