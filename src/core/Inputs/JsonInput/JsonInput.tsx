import * as React from "react"

import { JsonInput as MantineJsonInput } from "@mantine/core"
import { type JsonInputProps as MantineJsonInputProps } from "@mantine/core"

export type JsonInputProps = MantineJsonInputProps & {}

export function JsonInput(props: JsonInputProps) {

    return (
        <MantineJsonInput {...props} />
    )
}

JsonInput.extend = MantineJsonInput.extend