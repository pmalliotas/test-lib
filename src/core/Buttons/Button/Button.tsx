import { ButtonFactory, Button as MantineButton, polymorphicFactory } from "@mantine/core"
import { type ButtonProps as MantineButtonProps } from "@mantine/core"

import classes from "./Button.module.css"

export type ButtonProps = MantineButtonProps & {}

type ButtonType = ButtonFactory & {
    props: ButtonProps
}

export const Button = polymorphicFactory<ButtonType>(((props, ref) => {
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

Button.Group = MantineButton.Group
Button.extend = MantineButton.extend

export default Button