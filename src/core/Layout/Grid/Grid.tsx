import * as React from "react"

import { Grid as MantineGrid } from "@mantine/core"
import { type GridProps as MantineGridProps } from "@mantine/core"

export type GridProps = MantineGridProps & {}

export function Grid(props: GridProps) {

    return (
        <MantineGrid {...props} />
    )
}

Grid.Col = MantineGrid.Col
Grid.extend = MantineGrid.extend