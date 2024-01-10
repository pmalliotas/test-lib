import * as React from "react"

import { ButtonFactory, Button as MantineButton, polymorphicFactory } from "@mantine/core"
import { type ButtonProps as MantineButtonProps } from "@mantine/core"

export type ButtonProps = MantineButtonProps & {
    disabled?: boolean
}

export type ButtonType = ButtonFactory & {
    props: ButtonProps
}

export const Button = polymorphicFactory<ButtonType>(((props, ref) => {
    return (
        <MantineButton ref={ref} {...props} />
    )
}))

Button.Group = MantineButton.Group
Button.extend = MantineButton.extend