import { ActionIcon as MantineActionIcon, createPolymorphicComponent } from "@mantine/core"
import { type ActionIconProps as MantineActionIconProps } from "@mantine/core"
import { forwardRef } from "react"

import classes from "./ActionIcon.module.css"

export type ActionIconProps = MantineActionIconProps & {}

export const ActionIcon: React.FC<ActionIconProps> = createPolymorphicComponent<"button", ActionIconProps>(forwardRef<HTMLButtonElement, ActionIconProps>((props, ref) => {
    return (
        <MantineActionIcon
            classNames={{
                loader: classes.loader
            }}
            {...props} ref={ref}
        />
    )
}))

export default ActionIcon