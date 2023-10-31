import { Group as MantineGroup } from "@mantine/core"
import { type GroupProps as MantineGroupProps } from "@mantine/core"

export type GroupProps = MantineGroupProps & {}

export function Group(props: GroupProps) {

    return (
        <MantineGroup {...props} />
    )
}

Group.extend = MantineGroup.extend