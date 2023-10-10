import { MultiSelect as MantineMultiSelect } from "@mantine/core"
import { type MultiSelectProps as MantineMultiSelectProps } from "@mantine/core"

export function MultiSelect(props: MantineMultiSelectProps) {

    return (
        <MantineMultiSelect {...props} />
    )
}

export type MultiSelectProps = MantineMultiSelectProps