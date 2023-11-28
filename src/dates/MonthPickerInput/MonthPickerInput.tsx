import { MonthPickerInput as MantineMonthPickerInput } from "@mantine/dates"
import { type MonthPickerInputProps as MantineMonthPickerInputProps, type DatePickerType } from "@mantine/dates"

export type MonthPickerInputProps<T extends DatePickerType = "default"> = MantineMonthPickerInputProps<T> & {}

export function MonthPickerInput(props: MonthPickerInputProps) {

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <MantineMonthPickerInput {...props} />
    )
}

MonthPickerInput.extend = MantineMonthPickerInput.extend