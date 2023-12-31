import * as React from "react"

import { Divider as MantineDivider } from "@mantine/core"
import { type DividerProps as MantineDividerProps } from "@mantine/core"

export type DividerProps = MantineDividerProps & {}

export function Divider(props: DividerProps) {

    return (
        <MantineDivider {...props} />
    )
}

Divider.extend = MantineDivider.extend