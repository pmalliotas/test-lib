import * as React from "react"

import { MultiSelect as MantineMultiSelect } from "@mantine/core"
import { type MultiSelectProps as MantineMultiSelectProps } from "@mantine/core"

export type MultiSelectProps = MantineMultiSelectProps & {}

export function MultiSelect(props: MantineMultiSelectProps) {

    return (
        <MantineMultiSelect {...props} />
    )
}

MultiSelect.extend = MantineMultiSelect.extend

export default MultiSelect