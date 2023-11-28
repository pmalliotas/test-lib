import * as React from "react"

import { Textarea as MantineTextarea } from "@mantine/core"
import { type TextareaProps as MantineTextareaProps } from "@mantine/core"

export type TextareaProps = MantineTextareaProps & {}

export function Textarea(props: TextareaProps) {

    return (
        <MantineTextarea {...props} />
    )
}

Textarea.extend = MantineTextarea.extend