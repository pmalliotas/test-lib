import { BadgeFactory, Badge as MantineBadge, polymorphicFactory } from "@mantine/core"
import { type BadgeProps as MantineBadgeProps } from "@mantine/core"

export type BadgeProps = MantineBadgeProps & {}

type BadgeType = BadgeFactory & {
    props: BadgeProps
}

export const Badge = polymorphicFactory<BadgeType>(((props, ref) => {
    return (
        <MantineBadge {...props} ref={ref} />
    )
}))

Badge.extend = MantineBadge.extend

export default Badge