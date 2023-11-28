import * as React from "react"

import { ColorPicker as MantineColorPicker } from "@mantine/core"
import { type ColorPickerProps as MantineColorPickerProps } from "@mantine/core"

export type ColorPickerProps = MantineColorPickerProps & {}

export function ColorPicker(props: ColorPickerProps) {

    return (
        <MantineColorPicker {...props} />
    )
}

ColorPicker.extend = MantineColorPicker.extend