import { ColorInput as MantineColorInput } from "@mantine/core"
import { type ColorInputProps as MantineColorInputProps } from "@mantine/core"

export type ColorInputProps = MantineColorInputProps & {}

export function ColorInput(props: ColorInputProps) {

    return (
        <MantineColorInput {...props} />
    )
}

ColorInput.extend = MantineColorInput.extend