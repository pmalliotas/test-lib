import * as React from "react"

import { Slider as MantineSlider } from "@mantine/core"
import { type SliderProps as MantineSliderProps } from "@mantine/core"

export type SliderProps = MantineSliderProps & {}

export function Slider(props: SliderProps) {

    return (
        <MantineSlider {...props} />
    )
}

Slider.extend = MantineSlider.extend