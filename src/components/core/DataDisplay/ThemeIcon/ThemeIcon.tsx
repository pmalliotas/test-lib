import { ThemeIcon as MantineThemeIcon } from "@mantine/core"
import { type ThemeIconProps as MantineThemeIconProps } from "@mantine/core"

export type ThemeIconProps = MantineThemeIconProps & {}

export function ThemeIcon(props: ThemeIconProps) {

    return (
        <MantineThemeIcon {...props} />
    )
}