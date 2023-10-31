import { VisuallyHidden as MantineVisuallyHidden } from "@mantine/core"
import { type VisuallyHiddenProps as MantineVisuallyHiddenProps } from "@mantine/core"

export type VisuallyHiddenProps = MantineVisuallyHiddenProps & {}
export function VisuallyHidden(props: VisuallyHiddenProps) {

    return (
        <MantineVisuallyHidden {...props} />
    )
}

VisuallyHidden.extend = MantineVisuallyHidden.extend