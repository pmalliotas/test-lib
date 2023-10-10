import { ColorSwatch as MantineColorSwatch, createPolymorphicComponent } from "@mantine/core"
import { type ColorSwatchProps as MantineColorSwatchProps } from "@mantine/core"
import { forwardRef } from "react"

export type ColorSwatchProps = MantineColorSwatchProps & {}

export const ColorSwatch = createPolymorphicComponent<"div", ColorSwatchProps>(forwardRef<HTMLDivElement, ColorSwatchProps>((props, ref) => {
    return (
        <MantineColorSwatch {...props} ref={ref} />
    )
}))