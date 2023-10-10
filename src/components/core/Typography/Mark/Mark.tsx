import { Mark as MantineMark } from "@mantine/core"
import { type MarkProps as MantineMarkProps } from "@mantine/core"

export type MarkProps = MantineMarkProps & {}

export function Mark(props: MarkProps) {

    return (
        <MantineMark {...props} />
    )
}
