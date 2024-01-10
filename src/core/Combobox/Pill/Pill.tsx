import * as React from "react"
import classes from "./Pill.module.css"

import { Pill as MantinePill } from "@mantine/core"
import { type PillProps as MantinePillProps } from "@mantine/core"

export type PillProps = MantinePillProps & {}

export function Pill(props: MantinePillProps) {

    return (
        <MantinePill
            classNames={{
                root: classes.root,
                label: classes.label,
                remove: classes.remove
            }}
            size="md"
            {...props}
        />
    )
}

Pill.extend = MantinePill.extend

export { PillGroup } from "@mantine/core"
export default Pill