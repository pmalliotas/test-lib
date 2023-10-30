import { Button as MantineButton, createPolymorphicComponent } from "@mantine/core"
import { type ButtonProps as MantineButtonProps } from "@mantine/core"
import { forwardRef } from "react"

import classes from "./Button.module.css"

export type ButtonProps = MantineButtonProps & {}

export const Button = createPolymorphicComponent<"button", ButtonProps>(forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return (
        <MantineButton
            classNames={{
                label: classes.label,
            }}
            {...props} ref={ref}
        />
    )
}))

export default Button