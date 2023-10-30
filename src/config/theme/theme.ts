import { createTheme, rem, type MantineThemeOverride } from "@mantine/core"
import { generateColors } from "@mantine/colors-generator"

import styles from "./styles.module.css"
import { Select, Button } from "../../core"

export const theme: MantineThemeOverride = createTheme({
    activeClassName: styles.active,
    defaultRadius: "md",
    breakpoints: {
        xs: "30em",
        sm: "48em",
        md: "64em",
        lg: "74em",
        xl: "90em",
    },
    primaryColor: "my-color",
    colors: {
        "ocean-blue": ["#7AD1DD", "#5FCCDB", "#44CADC", "#2AC9DE", "#1AC2D9", "#11B7CD", "#09ADC3", "#0E99AC", "#128797", "#147885"],
        "my-color": generateColors("#a9ca31")
    },
    fontFamily: "Verdana, sans-serif",
    fontFamilyMonospace: "Monaco, Courier, monospace",
    fontSizes: {
        xs: rem(10),
        sm: rem(11),
        md: rem(14),
        lg: rem(16),
        xl: rem(20),
    },
    lineHeights: {
        xs: "1.4",
        sm: "1.45",
        md: "1.55",
        lg: "1.6",
        xl: "1.65",
    },
    headings: {
        // properties for all headings
        fontWeight: "400",
        fontFamily: "Roboto",

        // properties for individual headings, all of them are optional
        sizes: {
            h1: { fontWeight: "100", fontSize: rem(36), lineHeight: "1.4" },
            h2: { fontSize: rem(30), lineHeight: "1.5" },
            // ...up to h6
            h6: { fontWeight: "900" },
        },
    },
    components: {
        // Button: Button.extend({

        // })
    },
    other: {

    }
})