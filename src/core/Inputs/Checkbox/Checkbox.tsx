import * as React from "react"

import { Checkbox as MantineCheckbox, CheckboxGroup as MantineCheckboxGroup, useMantineTheme } from "@mantine/core"
import { type CheckboxProps as MantineCheckboxProps, type CheckboxGroupProps as MantineCheckboxGroupProps } from "@mantine/core"

export type CheckboxProps = MantineCheckboxProps & {}

export type CheckboxGroupProps = MantineCheckboxGroupProps & {}

export function Checkbox(props: MantineCheckboxProps) {
    const theme = useMantineTheme()
    theme.primaryColor


    return (
        <MantineCheckbox
            styles={{
                input: {
                    border: !props.checked ? `2px solid ${theme.colors["eerie-black"][5]}` : `2px solid ${theme.colors[theme.primaryColor as keyof typeof theme.colors][5]}`,
                },
                icon: {
                    color: props.indeterminate ? theme.colors[theme.primaryColor as keyof typeof theme.colors][5] : "",
                }
            }}
            {...props}
        />
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