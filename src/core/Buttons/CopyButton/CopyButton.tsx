import * as React from "react"

import { CopyButton as MantineCopyButton } from "@mantine/core"
import { type CopyButtonProps as MantineCopyButtonProps } from "@mantine/core"

export type CopyButtonProps = MantineCopyButtonProps & {}

export function CopyButton(props: CopyButtonProps) {

    return (
        <MantineCopyButton {...props} />
    )
}

export default CopyButton