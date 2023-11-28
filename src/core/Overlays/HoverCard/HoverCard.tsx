import * as React from "react"

import { HoverCard as MantineHoverCard } from "@mantine/core"
import { type HoverCardProps as MantineHoverCardProps } from "@mantine/core"

export type HoverCardProps = MantineHoverCardProps & {}

export function HoverCard(props: HoverCardProps) {

    return (
        <MantineHoverCard {...props} />
    )
}

HoverCard.extend = MantineHoverCard.extend