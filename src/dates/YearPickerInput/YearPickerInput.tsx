import { YearPickerInput as MantineYearPickerInput } from "@mantine/dates"
import { type YearPickerInputProps as MantineYearPickerInputProps } from "@mantine/dates"

export type YearPickerInputProps = MantineYearPickerInputProps & {}

export function YearPickerInput(props: YearPickerInputProps) {

    return (
        <MantineYearPickerInput {...props} />
    )
}