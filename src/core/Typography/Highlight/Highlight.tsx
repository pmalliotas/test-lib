import * as React from "react"

import { Highlight as MantineHighlight } from "@mantine/core"
import { type HighlightProps as MantineHighlightProps } from "@mantine/core"

export type HighlightProps = MantineHighlightProps & {}

export function Highlight(props: HighlightProps) {

    return (
        <MantineHighlight {...props} />
    )
}

Highlight.extend = MantineHighlight.extend