import { FlexFactory, Flex as MantineFlex, polymorphicFactory } from "@mantine/core"
import { type FlexProps as MantineFlexProps } from "@mantine/core"

export type FlexProps = MantineFlexProps & {}

type FlexType = FlexFactory & {
    props: FlexProps
}

export const Flex = polymorphicFactory<FlexType>(((props, ref) => {

    return (
        <MantineFlex
            ref={ref}
            {...props}
        />
    )
}))

Flex.extend = MantineFlex.extend