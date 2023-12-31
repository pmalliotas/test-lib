import * as React from "react"

import { Checkbox as MantineCheckbox, CheckboxGroup as MantineCheckboxGroup } from "@mantine/core"
import { type CheckboxProps as MantineCheckboxProps, type CheckboxGroupProps as MantineCheckboxGroupProps } from "@mantine/core"

export type CheckboxProps = MantineCheckboxProps & {}

export type CheckboxGroupProps = MantineCheckboxGroupProps & {}

export function Checkbox(props: MantineCheckboxProps) {

    return (
        <MantineCheckbox {...props} />
    )
}

Checkbox.Group = MantineCheckbox.Group
Checkbox.extend = MantineCheckbox.extend

export function CheckboxGroup(props: MantineCheckboxGroupProps) {
    return (
        <MantineCheckboxGroup {...props} />
    )
}

CheckboxGroup.extend = MantineCheckboxGroup.extend

export default Checkbox