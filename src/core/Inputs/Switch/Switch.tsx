import { Switch as MantineSwitch, SwitchGroup as MantineSwitchGroup } from "@mantine/core"
import { type SwitchProps as MantineSwitchProps, type SwitchGroupProps as MantineSwitchGroupProps } from "@mantine/core"

export type SwitchProps = MantineSwitchProps & {}
export type SwitchGroupProps = MantineSwitchGroupProps & {}

export function Switch(props: SwitchProps) {

    return (
        <MantineSwitch {...props} />
    )
}

Switch.Group = MantineSwitch.Group
Switch.extend = MantineSwitch.extend

export function SwitchGroup(props: SwitchGroupProps) {

    return (
        <MantineSwitchGroup {...props} />
    )
}

SwitchGroup.extend = MantineSwitchGroup.extend