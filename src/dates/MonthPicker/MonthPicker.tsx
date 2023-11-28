import { MonthPicker as MantineMonthPicker } from "@mantine/dates"
import { type MonthPickerProps as MantineMonthPickerProps } from "@mantine/dates"

export type MonthPickerProps = MantineMonthPickerProps & {}

export function MonthPicker(props: MonthPickerProps) {

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <MantineMonthPicker {...props} />
    )
}

MonthPicker.extend = MantineMonthPicker.extend