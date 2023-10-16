import { Select as MantineSelect } from "@mantine/core"
import { type SelectProps as MantineSelectProps } from "@mantine/core"

export type SelectProps = MantineSelectProps & {}

export function Select(props: MantineSelectProps) {

    return (
        <MantineSelect {...props} />
    )
}

export default Select