import * as React from "react"
import classes from "./PasswordInput.module.css"

import { PasswordInput as MantinePasswordInput } from "@mantine/core"
import { type PasswordInputProps as MantinePasswordInputProps } from "@mantine/core"

export type PasswordInputProps = MantinePasswordInputProps & {}

export function PasswordInput(props: PasswordInputProps) {

    return (
        <MantinePasswordInput
            classNames={{
                label: props.disabled ? classes.labelDisabled : classes.labelEnabled,
                input: classes.input,
                root: classes.root,
                description: classes.description,
                wrapper: classes.wrapper,
            }}
            size="md"
            inputWrapperOrder={["label", "input", "description", "error"]}
            {...props}
        />
    )
}

PasswordInput.extend = MantinePasswordInput.extend