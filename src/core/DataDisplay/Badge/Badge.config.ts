import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import { BadgeFactory, rem } from "@mantine/core"

export const BadgeConfig: ExtendsRootComponent<BadgeFactory> = {
    defaultProps: {
        color: "mexican-pink",
        radius: "sm",
        px: rem(8),
        py: rem(4),
        h: rem(24),
        // @ts-expect-error - Should allow indexes as keys
        bg: "mexican-pink.5",
        styles: {
            root: {
                textTransform: "none",
            },
            section: {
                height: "1.75em",
                width: "1.75em",
            }
        }
    },

}
