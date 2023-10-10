import { UnstyledButton as MantineUnstyledButton, createPolymorphicComponent } from "@mantine/core"
import { type UnstyledButtonProps as MantineUnstyledButtonProps } from "@mantine/core"
import { forwardRef } from "react"

export type UnstyledButtonProps = MantineUnstyledButtonProps & {}

export const UnstyledButton = createPolymorphicComponent<"button", UnstyledButtonProps>(forwardRef<HTMLButtonElement, UnstyledButtonProps>((props, ref) => {
    return (
        <MantineUnstyledButton {...props} ref={ref} />
    )
}))
