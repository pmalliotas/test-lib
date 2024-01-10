import * as React from "react"
import classes from "./Tabs.module.css"

import { Tabs as MantineTabs } from "@mantine/core"
import { type TabsProps as MantineTabsProps } from "@mantine/core"

export type TabsProps = MantineTabsProps & {}
export function Tabs(props: TabsProps) {

    return (
        <MantineTabs
            classNames={{
                tab: classes.tab,
                tabSection: classes.tabSection,
            }}
            {...props}
        />
    )
}

Tabs.List = MantineTabs.List
Tabs.Panel = MantineTabs.Panel
Tabs.Tab = MantineTabs.Tab

Tabs.extend = MantineTabs.extend
