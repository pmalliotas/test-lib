import * as React from "react"

import { UnstyledButton as MantineUnstyledButton, UnstyledButtonFactory, polymorphicFactory } from "@mantine/core"
import { type UnstyledButtonProps as MantineUnstyledButtonProps } from "@mantine/core"

export type UnstyledButtonProps = MantineUnstyledButtonProps & {}

type UnstyledButtonType = UnstyledButtonFactory & {
    props: UnstyledButtonProps
}

export const UnstyledButton = polymorphicFactory<UnstyledButtonType>(((props, ref) => {
    return (
        <MantineUnstyledButton {...props} ref={ref} />
    )
}))

UnstyledButton.extend = MantineUnstyledButton.extend

export default UnstyledButton