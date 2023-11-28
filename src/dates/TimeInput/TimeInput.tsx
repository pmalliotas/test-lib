import * as React from "react"

import { TimeInput as MantineTimeInput } from "@mantine/dates"
import { type TimeInputProps as MantineTimeInputProps } from "@mantine/dates"

export type TimeInputProps = MantineTimeInputProps & {}

export function TimeInput(props: TimeInputProps) {

    return (
        <MantineTimeInput {...props} />
    )
}

TimeInput.extend = MantineTimeInput.extend