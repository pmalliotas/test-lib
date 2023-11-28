import * as React from "react"

import { RingProgress as MantineRingProgress } from "@mantine/core"
import { type RingProgressProps as MantineRingProgressProps } from "@mantine/core"

export type RingProgressProps = MantineRingProgressProps & {}

export function RingProgress(props: RingProgressProps) {

    return (
        <MantineRingProgress {...props} />
    )
}

RingProgress.extend = MantineRingProgress.extend

export default RingProgress