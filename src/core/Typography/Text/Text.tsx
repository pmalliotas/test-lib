import { Text as MantineText, createPolymorphicComponent } from "@mantine/core"
import { type TextProps as MantineTextProps } from "@mantine/core"
import { forwardRef } from "react"

export type TextProps = MantineTextProps & {}

export const Text: React.FC<TextProps> = createPolymorphicComponent<"p", TextProps>(forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
    return (
        <MantineText {...props} ref={ref} />
    )
}))
