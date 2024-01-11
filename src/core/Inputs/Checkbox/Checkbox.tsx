import * as React from "react"
import classes from "./Checkbox.module.css"

import { Checkbox as MantineCheckbox } from "@mantine/core"
import { type CheckboxProps as MantineCheckboxProps } from "@mantine/core"

export type CheckboxProps = MantineCheckboxProps & {}

export function Checkbox(props: MantineCheckboxProps) {

    return (
        <MantineCheckbox
            classNames={{
                input: classes.input,
                icon: classes.icon,
                root: classes.root,
            }}
            variant="outline"
            {...props}
        />
    )
}

Checkbox.Group = MantineCheckbox.Group
Checkbox.extend = MantineCheckbox.extend


export { CheckboxGroup, type CheckboxGroupProps } from "@mantine/core"
export default Checkbox