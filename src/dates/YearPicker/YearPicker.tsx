import { YearPicker as MantineYearPicker } from "@mantine/dates"
import { type YearPickerProps as MantineYearPickerProps, type DatePickerType } from "@mantine/dates"

export type YearPickerProps<T extends DatePickerType = "default"> = MantineYearPickerProps<T> & {}

export function YearPicker(props: YearPickerProps) {

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <MantineYearPicker {...props} />
    )
}

YearPicker.extend = MantineYearPicker.extend