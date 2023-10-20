import { Combobox as MantineCombobox } from "@mantine/core"
import { type ComboboxProps as MantineComboboxProps } from "@mantine/core"

export type ComboboxProps = MantineComboboxProps & {}

export function Combobox(props: MantineComboboxProps) {

    return (
        <MantineCombobox {...props} />
    )
}

export default Combobox