import { PasswordInput as MantinePasswordInput } from "@mantine/core"
import { type PasswordInputProps as MantinePasswordInputProps } from "@mantine/core"

export type PasswordInputProps = MantinePasswordInputProps & {}

export function PasswordInput(props: PasswordInputProps) {

    return (
        <MantinePasswordInput {...props} />
    )
}

PasswordInput.extend = MantinePasswordInput.extend