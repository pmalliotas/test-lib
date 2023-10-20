import { PinInput as MantinePinInput } from "@mantine/core"
import { type PinInputProps as MantinePinInputProps } from "@mantine/core"

export type PinInputProps = MantinePinInputProps & {}

export function PinInput(props: PinInputProps) {

    return (
        <MantinePinInput {...props} />
    )
}
