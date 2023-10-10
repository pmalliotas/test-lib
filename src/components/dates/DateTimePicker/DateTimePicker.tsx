import { DateTimePicker as MantineDateTimePicker } from "@mantine/dates"
import { type DateTimePickerProps as MantineDateTimePickerProps } from "@mantine/dates"

export type DateTimePickerProps = MantineDateTimePickerProps

export function DateTimePicker(props: DateTimePickerProps) {

    return (
        <MantineDateTimePicker {...props} />
    )
}