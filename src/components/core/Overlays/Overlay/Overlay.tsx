import { Overlay as MantineOverlay, createPolymorphicComponent } from "@mantine/core"
import { type OverlayProps as MantineOverlayProps } from "@mantine/core"
import { forwardRef } from "react"

export type OverlayProps = MantineOverlayProps & {}

export const Overlay = createPolymorphicComponent<"div", OverlayProps>(forwardRef<HTMLDivElement, OverlayProps>((props, ref) => {
    return (
        <MantineOverlay {...props} ref={ref} />
    )
}))