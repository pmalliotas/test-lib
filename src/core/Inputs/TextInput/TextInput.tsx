import * as React from "react"

import { TextInput as MantineTextInput } from "@mantine/core"
import { type TextInputProps as MantineTextInputProps } from "@mantine/core"

export type TextInputProps = MantineTextInputProps & {}

export function TextInput(props: TextInputProps) {

    return (
        <MantineTextInput {...props} />
    )
}

TextInput.extend = MantineTextInput.extend