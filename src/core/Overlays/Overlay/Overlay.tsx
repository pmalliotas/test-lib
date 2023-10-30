import { Overlay as MantineOverlay, OverlayFactory, polymorphicFactory } from "@mantine/core"
import { type OverlayProps as MantineOverlayProps } from "@mantine/core"

export type OverlayProps = MantineOverlayProps & {}

type OverlayType = OverlayFactory & {
    props: OverlayProps
}

export const Overlay = polymorphicFactory<OverlayType>(((props, ref) => {
    return (
        <MantineOverlay {...props} ref={ref} />
    )
}))

Overlay.extend = MantineOverlay.extend