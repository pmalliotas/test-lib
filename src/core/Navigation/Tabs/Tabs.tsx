import { Tabs as MantineTabs } from "@mantine/core"
import { type TabsProps as MantineTabsProps } from "@mantine/core"

export type TabsProps = MantineTabsProps & {}
export function Tabs(props: TabsProps) {

    return (
        <MantineTabs {...props} />
    )
}
