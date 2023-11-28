import * as React from "react"

import { Menu as MantineMenu } from "@mantine/core"
import { type MenuProps as MantineMenuProps } from "@mantine/core"

export type MenuProps = MantineMenuProps & {}

export function Menu(props: MenuProps) {

    return (
        <MantineMenu {...props} />
    )
}

Menu.Divider = MantineMenu.Divider
Menu.Item = MantineMenu.Item
Menu.Dropdown = MantineMenu.Dropdown
Menu.Label = MantineMenu.Label
Menu.Target = MantineMenu.Target

Menu.extend = MantineMenu.extend