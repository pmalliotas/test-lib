import * as React from "react"
import classes from "./TextInput.module.css"

import { TextInput as MantineTextInput } from "@mantine/core"
import { type TextInputProps as MantineTextInputProps } from "@mantine/core"

export type TextInputProps = MantineTextInputProps & {}

export function TextInput(props: TextInputProps) {

    return (
        <MantineTextInput
            classNames={{
                label: props.disabled ? classes.labelDisabled : classes.labelEnabled,
                input: classes.input,
                root: classes.root,
                description: classes.description,
            }}
            inputWrapperOrder={["label", "input", "description", "error"]}
            {...props}
        />
    )
}

TextInput.extend = MantineTextInput.extend