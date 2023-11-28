import * as React from "react"

import { Indicator as MantineIndicator } from "@mantine/core"
import { type IndicatorProps as MantineIndicatorProps } from "@mantine/core"

export type IndicatorProps = MantineIndicatorProps & {}

export function Indicator(props: IndicatorProps) {

    return (
        <MantineIndicator {...props} />
    )
}

Indicator.extend = MantineIndicator.extend

export default Indicator