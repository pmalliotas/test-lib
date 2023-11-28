import * as React from "react"

import { ThemeIcon as MantineThemeIcon } from "@mantine/core"
import { type ThemeIconProps as MantineThemeIconProps } from "@mantine/core"

export type ThemeIconProps = MantineThemeIconProps & {}

export function ThemeIcon(props: ThemeIconProps) {

    return (
        <MantineThemeIcon {...props} />
    )
}

ThemeIcon.extend = MantineThemeIcon.extend

export default ThemeIcon