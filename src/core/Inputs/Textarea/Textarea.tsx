import * as React from "react"
import classes from "./TextArea.module.css"

import { Textarea as MantineTextarea } from "@mantine/core"
import { type TextareaProps as MantineTextareaProps } from "@mantine/core"

export type TextareaProps = MantineTextareaProps & {}

export function Textarea(props: TextareaProps) {

    return (
        <MantineTextarea
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

Textarea.extend = MantineTextarea.extend