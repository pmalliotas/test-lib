import { MonthPicker as MantineMonthPicker } from "@mantine/dates"
import { type MonthPickerProps as MantineMonthPickerProps } from "@mantine/dates"

export type MonthPickerProps = MantineMonthPickerProps & {}

export function MonthPicker(props: MonthPickerProps) {

    return (
        <MantineMonthPicker {...props} />
    )
}