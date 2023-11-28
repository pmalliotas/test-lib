import * as React from "react"

import { AnchorFactory, Anchor as MantineAnchor, polymorphicFactory } from "@mantine/core"
import { type AnchorProps as MantineAnchorProps } from "@mantine/core"

export type AnchorProps = MantineAnchorProps & {}

type AnchorType = AnchorFactory & {
    props: AnchorProps
}

export const Anchor = polymorphicFactory<AnchorType>(((props, ref) => {
    return (
        <MantineAnchor {...props} ref={ref} />
    )
}))

Anchor.extend = MantineAnchor.extend