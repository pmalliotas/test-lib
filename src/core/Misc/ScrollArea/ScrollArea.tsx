import { ScrollArea as MantineScrollArea } from "@mantine/core"
import { type ScrollAreaProps as MantineScrollAreaProps } from "@mantine/core"

export type ScrollAreaProps = MantineScrollAreaProps & {}

export function ScrollArea(props: ScrollAreaProps) {

    return (
        <MantineScrollArea {...props} />
    )
}
