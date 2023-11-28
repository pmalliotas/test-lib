import * as React from "react"

import { Tabs as MantineTabs } from "@mantine/core"
import { type TabsProps as MantineTabsProps } from "@mantine/core"

export type TabsProps = MantineTabsProps & {}
export function Tabs(props: TabsProps) {

    return (
        <MantineTabs {...props} />
    )
}

Tabs.List = MantineTabs.List
Tabs.Panel = MantineTabs.Panel
Tabs.Tab = MantineTabs.Tab

Tabs.extend = MantineTabs.extend
