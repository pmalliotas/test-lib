import { DatePickerInput as MantineDatePickerInput } from "@mantine/dates"
import { type DatePickerInputProps as MantineDatePickerInputProps, type DatePickerType } from "@mantine/dates"

export type DatePickerInputProps<T extends DatePickerType = "default"> = MantineDatePickerInputProps<T> & {

}

export function DatePickerInput(props: DatePickerInputProps) {

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <MantineDatePickerInput {...props} />
    )
}

DatePickerInput.extend = MantineDatePickerInput.extend