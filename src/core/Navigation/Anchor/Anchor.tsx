import * as React from "react"
import classes from "./Anchor.module.css"

import { AnchorFactory, Anchor as MantineAnchor, polymorphicFactory } from "@mantine/core"
import { type AnchorProps as MantineAnchorProps } from "@mantine/core"

export type AnchorProps = MantineAnchorProps & {
    disabled?: boolean
    href: string
}

type AnchorType = AnchorFactory & {
    props: AnchorProps
}

export const Anchor = polymorphicFactory<AnchorType>(((props, ref) => {
    return (
        <MantineAnchor
            classNames={{
                root: classes.root
            }}
            disabled={props.disabled}
            {...props}
            href={!props.disabled ? props.href : undefined}
            ref={ref}
        />
    )
}))

//@ts-expect-error - Because of href in Anchor props
Anchor.extend = MantineAnchor.extend