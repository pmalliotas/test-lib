import * as React from "react"

import { NumberFormatter as MantineNumberFormatter } from "@mantine/core"
import { type NumberFormatterProps as MantineNumberFormatterProps } from "@mantine/core"

export type NumberFormatterProps = MantineNumberFormatterProps & {}

export function NumberFormatter(props: NumberFormatterProps) {

    return (
        <MantineNumberFormatter {...props} />
    )
}

NumberFormatter.extend = MantineNumberFormatter.extend

export default NumberFormatter