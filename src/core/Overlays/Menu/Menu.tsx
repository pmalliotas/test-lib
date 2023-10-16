import { Menu as MantineMenu } from "@mantine/core"
import { type MenuProps as MantineMenuProps } from "@mantine/core"

export type MenuProps = MantineMenuProps & {}

export function Menu(props: MenuProps) {

    return (
        <MantineMenu {...props} />
    )
}
