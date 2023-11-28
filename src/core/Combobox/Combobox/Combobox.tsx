import * as React from "react"

import { Combobox as MantineCombobox } from "@mantine/core"
import { type ComboboxProps as MantineComboboxProps } from "@mantine/core"

export type ComboboxProps = MantineComboboxProps & {}

export function Combobox(props: MantineComboboxProps) {

    return (
        <MantineCombobox {...props} />
    )
}

Combobox.extend = MantineCombobox.extend

export default Combobox