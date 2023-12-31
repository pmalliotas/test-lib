import * as React from "react"

import { Progress as MantineProgress } from "@mantine/core"
import { type ProgressProps as MantineProgressProps } from "@mantine/core"

export type ProgressProps = MantineProgressProps & {}

export function Progress(props: ProgressProps) {

    return (
        <MantineProgress {...props} />
    )
}

Progress.extend = MantineProgress.extend

export default Progress
