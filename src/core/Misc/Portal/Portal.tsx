import * as React from "react"

import { Portal as MantinePortal } from "@mantine/core"
import { type PortalProps as MantinePortalProps } from "@mantine/core"

export type PortalProps = MantinePortalProps & {}
export function Portal(props: PortalProps) {

    return (
        <MantinePortal {...props} />
    )
}
