import { Badge as MantineBadge, createPolymorphicComponent } from "@mantine/core"
import { type BadgeProps as MantineBadgeProps } from "@mantine/core"
import { forwardRef } from "react"

export type BadgeProps = MantineBadgeProps & {}

export const Badge = createPolymorphicComponent<"p", BadgeProps>(forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
    return (
        <MantineBadge {...props} ref={ref} />
    )
}))
