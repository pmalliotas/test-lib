import { YearPicker as MantineYearPicker } from "@mantine/dates"
import { type YearPickerProps as MantineYearPickerProps, type DatePickerType } from "@mantine/dates"

export type YearPickerProps<T extends DatePickerType = "default"> = MantineYearPickerProps<T> & {}

export function YearPicker(props: YearPickerProps) {

    return (
        <MantineYearPicker {...props} />
    )
}

YearPicker.extend = MantineYearPicker.extend