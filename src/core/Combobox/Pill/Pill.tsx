import * as React from "react"

import { Pill as MantinePill } from "@mantine/core"
import { type PillProps as MantinePillProps } from "@mantine/core"

export type PillProps = MantinePillProps & {}

export function Pill(props: MantinePillProps) {

    return (
        <MantinePill {...props} />
    )
}

Pill.extend = MantinePill.extend

export default Pill