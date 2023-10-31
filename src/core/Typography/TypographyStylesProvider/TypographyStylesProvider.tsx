import { TypographyStylesProvider as MantineTypographyStylesProvider } from "@mantine/core"
import { type TypographyStylesProviderProps as MantineTypographyStylesProviderProps } from "@mantine/core"

export type TypographyStylesProviderProps = MantineTypographyStylesProviderProps & {}

export function TypographyStylesProvider(props: TypographyStylesProviderProps) {

    return (
        <MantineTypographyStylesProvider {...props} />
    )
}

TypographyStylesProvider.extend = MantineTypographyStylesProvider.extend