import { Flex as MantineFlex } from "@mantine/core"
import { type FlexProps as MantineFlexProps } from "@mantine/core"

export type FlexProps = MantineFlexProps & {}

export function Flex(props: FlexProps) {

    return (
        <MantineFlex {...props} />
    )
}
