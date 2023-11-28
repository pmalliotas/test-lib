import * as React from "react"

import { LoadingOverlay as MantineLoadingOverlay } from "@mantine/core"
import { type LoadingOverlayProps as MantineLoadingOverlayProps } from "@mantine/core"

export type LoadingOverlayProps = MantineLoadingOverlayProps & {}

export function LoadingOverlay(props: LoadingOverlayProps) {

    return (
        <MantineLoadingOverlay {...props} />
    )
}

LoadingOverlay.extend = MantineLoadingOverlay.extend