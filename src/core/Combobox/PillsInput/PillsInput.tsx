import { PillsInput as MantinePillsInput } from "@mantine/core"
import { type PillsInputProps as MantinePillsInputProps } from "@mantine/core"

export type PillsInputProps = MantinePillsInputProps & {}

export function PillsInput(props: MantinePillsInputProps) {

    return (
        <MantinePillsInput {...props} />
    )
}

export default PillsInput