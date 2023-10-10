import { PillsInput as MantinePillsInput } from "@mantine/core"
import { type PillsInputProps as MantinePillsInputProps } from "@mantine/core"

export function PillsInput(props: MantinePillsInputProps) {

    return (
        <MantinePillsInput {...props} />
    )
}

export type PillsInputProps = MantinePillsInputProps