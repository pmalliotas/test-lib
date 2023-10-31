import { Collapse as MantineCollapse } from "@mantine/core"
import { type CollapseProps as MantineCollapseProps } from "@mantine/core"

export type CollapseProps = MantineCollapseProps & {}

export function Collapse(props: CollapseProps) {

    return (
        <MantineCollapse {...props} />
    )
}