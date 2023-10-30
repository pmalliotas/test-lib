import { createPolymorphicComponent, Button as MantineButton } from "@mantine/core"
import { type ButtonProps as MantineButtonProps } from "@mantine/core"
import { forwardRef } from "react"

import classes from "./Button.module.css"

export type ButtonProps = MantineButtonProps & {}

export const Button = createPolymorphicComponent<"button", ButtonProps>(forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return (
        <MantineButton
            classNames={{
                label: classes.label
            }}
            ref={ref}
            {...props}
        />
    )
}))

export default Button