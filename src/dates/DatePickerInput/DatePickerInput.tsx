import { DatePickerInput as MantineDatePickerInput } from "@mantine/dates"
import { type DatePickerInputProps as MantineDatePickerInputProps, type DatePickerType } from "@mantine/dates"

export type DatePickerInputProps<T extends DatePickerType = "default"> = MantineDatePickerInputProps<T> & {}

export function DatePickerInput(props: DatePickerInputProps) {

    return (
        <MantineDatePickerInput {...props} />
    )
}