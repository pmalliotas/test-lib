import * as React from "react"

import { Transition as MantineTransition } from "@mantine/core"
import { type TransitionProps as MantineTransitionProps } from "@mantine/core"

export type TransitionProps = MantineTransitionProps & {}
export function Transition(props: TransitionProps) {

    return (
        <MantineTransition {...props} />
    )
}
