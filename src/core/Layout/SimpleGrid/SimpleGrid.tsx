import { SimpleGrid as MantineSimpleGrid } from "@mantine/core"
import { type SimpleGridProps as MantineSimpleGridProps } from "@mantine/core"

export type SimpleGridProps = MantineSimpleGridProps & {}

export function SimpleGrid(props: SimpleGridProps) {

    return (
        <MantineSimpleGrid {...props} />
    )
}

SimpleGrid.extend = MantineSimpleGrid.extend