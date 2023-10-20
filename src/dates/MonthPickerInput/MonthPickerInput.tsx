import { MonthPickerInput as MantineMonthPickerInput } from "@mantine/dates"
import { type MonthPickerInputProps as MantineMonthPickerInputProps, type DatePickerType } from "@mantine/dates"

export type MonthPickerInputProps<T extends DatePickerType = "default"> = MantineMonthPickerInputProps<T> & {}

export function MonthPickerInput(props: MonthPickerInputProps) {

    return (
        <MantineMonthPickerInput {...props} />
    )
}