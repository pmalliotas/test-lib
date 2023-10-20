import { Container as MantineContainer } from "@mantine/core"
import { type ContainerProps as MantineContainerProps } from "@mantine/core"

export type ContainerProps = MantineContainerProps & {}
export function Container(props: ContainerProps) {

    return (
        <MantineContainer {...props} />
    )
}
