import { ColorSwatchFactory, ColorSwatch as MantineColorSwatch, polymorphicFactory } from "@mantine/core"
import { type ColorSwatchProps as MantineColorSwatchProps } from "@mantine/core"

export type ColorSwatchProps = MantineColorSwatchProps & {}

type ColorSwatchType = ColorSwatchFactory & {
    props: ColorSwatchProps
}

export const ColorSwatch = polymorphicFactory<ColorSwatchType>(((props, ref) => {
    return (
        <MantineColorSwatch {...props} ref={ref} />
    )
}))

ColorSwatch.extend = MantineColorSwatch.extend

export default ColorSwatch