import * as React from "react"

import { Combobox as MantineCombobox } from "@mantine/core"
import { type ComboboxProps as MantineComboboxProps } from "@mantine/core"

export type ComboboxProps = MantineComboboxProps & {}

export function Combobox(props: MantineComboboxProps) {

    return (
        <MantineCombobox {...props} />
    )
}

Combobox.Target = MantineCombobox.Target
Combobox.Dropdown = MantineCombobox.Dropdown
Combobox.Options = MantineCombobox.Options
Combobox.Option = MantineCombobox.Option
Combobox.extend = MantineCombobox.extend

export { ComboboxTarget, ComboboxDropdown, ComboboxOptions, ComboboxOption } from "@mantine/core"

export default Combobox