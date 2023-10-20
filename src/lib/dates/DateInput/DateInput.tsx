import { DateInput as MantineDateInput } from "@mantine/dates"
import { type DateInputProps as MantineDateInputProps } from "@mantine/dates"

export type DateInputProps = MantineDateInputProps & {}

export function DateInput(props: DateInputProps) {

    return (
        <MantineDateInput {...props} />
    )
}