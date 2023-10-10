import { ActionIcon as MantineActionIcon, createPolymorphicComponent } from "@mantine/core"
import { type ActionIconProps as MantineActionIconProps } from "@mantine/core"
import { forwardRef } from "react"

export type ActionIconProps = MantineActionIconProps

export const ActionIcon = createPolymorphicComponent<"button", ActionIconProps>(forwardRef<HTMLButtonElement, ActionIconProps>((props, ref) => {
    return (
        <MantineActionIcon {...props} ref={ref} />
    )
}))
