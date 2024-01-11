import * as React from "react"
import classes from "./Switch.module.css"

import { Switch as MantineSwitch } from "@mantine/core"
import { type SwitchProps as MantineSwitchProps } from "@mantine/core"

export type SwitchProps = MantineSwitchProps & {}

export function Switch(props: SwitchProps) {

    // TODO - Add correct disabled checked styles

    return (
        <MantineSwitch
            classNames={{
                thumb: classes.thumb,
                // track: classes.track,
                body: classes.body,
                input: classes.input,
            }}
            {...props}
        />
    )
}

Switch.Group = MantineSwitch.Group
Switch.extend = MantineSwitch.extend

export { SwitchGroup,type SwitchGroupProps } from "@mantine/core"