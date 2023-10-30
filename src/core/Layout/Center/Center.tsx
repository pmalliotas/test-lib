import { CenterFactory, Center as MantineCenter, polymorphicFactory } from "@mantine/core"
import { type CenterProps as MantineCenterProps } from "@mantine/core"

export type CenterProps = MantineCenterProps & {}

type CenterType = CenterFactory & {
    props: CenterProps
}

export const Center = polymorphicFactory<CenterType>(((props, ref) => {
    return (
        <MantineCenter {...props} ref={ref} />
    )
}))

Center.extend = MantineCenter.extend
