import * as React from "react"

import { FileInput as MantineFileInput } from "@mantine/core"
import { type FileInputProps as MantineFileInputProps } from "@mantine/core"

export type FileInputProps = MantineFileInputProps & {}

export function FileInput(props: FileInputProps) {

    return (
        <MantineFileInput {...props} />
    )
}