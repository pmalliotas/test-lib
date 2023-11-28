import * as React from "react"

import { YearPickerInput as MantineYearPickerInput } from "@mantine/dates"
import { type YearPickerInputProps as MantineYearPickerInputProps } from "@mantine/dates"

export type YearPickerInputProps = MantineYearPickerInputProps & {}

export function YearPickerInput(props: YearPickerInputProps) {

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <MantineYearPickerInput {...props} />
    )
}

YearPickerInput.extend = MantineYearPickerInput.extend