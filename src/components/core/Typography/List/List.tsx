import { List as MantineList } from "@mantine/core"
import { type ListProps as MantineListProps } from "@mantine/core"

export type ListProps = MantineListProps & {}

export function List(props: ListProps) {

    return (
        <MantineList {...props} />
    )
}
