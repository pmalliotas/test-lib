import { Text as MantineText, TextFactory, polymorphicFactory } from "@mantine/core"
import { type TextProps as MantineTextProps } from "@mantine/core"

export type TextProps = MantineTextProps & {}

type TextType = TextFactory & {
    props: TextProps
}

export const Text = polymorphicFactory<TextType>(((props, ref) => {
    return (
        <MantineText {...props} ref={ref} />
    )
}))

Text.extend = MantineText.extend