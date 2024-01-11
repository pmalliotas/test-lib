import * as React from "react"

import { ActionIconFactory, ActionIcon as MantineActionIcon, polymorphicFactory } from "@mantine/core"
import { type ActionIconProps as MantineActionIconProps } from "@mantine/core"

import classes from "./ActionIcon.module.css"

export type ActionIconProps = MantineActionIconProps & {}

type ActionIconType = ActionIconFactory & {
    props: ActionIconProps
}

export const ActionIcon = polymorphicFactory<ActionIconType>(((props, ref) => {
    return (
        <MantineActionIcon
            classNames={{
                loader: classes.loader
            }}
            {...props} ref={ref}
        />
    )
}))

ActionIcon.Group = MantineActionIcon.Group
ActionIcon.extend = MantineActionIcon.extend
