import { Anchor as MantineAnchor, createPolymorphicComponent } from "@mantine/core"
import { type AnchorProps as MantineAnchorProps } from "@mantine/core"
import { forwardRef } from "react"

export type AnchorProps = MantineAnchorProps & {}

export const Anchor = createPolymorphicComponent<"a", AnchorProps>(forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
    return (
        <MantineAnchor {...props} ref={ref} />
    )
}))
