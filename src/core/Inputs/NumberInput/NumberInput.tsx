import * as React from "react"

import { NumberInput as MantineNumberInput } from "@mantine/core"
import { type NumberInputProps as MantineNumberInputProps } from "@mantine/core"

export type NumberInputProps = MantineNumberInputProps & {}

export function NumberInput(props: NumberInputProps) {

    return (
        <MantineNumberInput {...props} />
    )
}

NumberInput.extend = MantineNumberInput.extend