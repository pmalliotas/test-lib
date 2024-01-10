import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import { TooltipFactory } from "@mantine/core/lib/components/Tooltip"
import { rem } from "@mantine/core"

export const TooltipConfig: ExtendsRootComponent<TooltipFactory> = {
    defaultProps: {
        radius: "md",
        color: "eerie-black",
        arrowSize: 8,
        p: rem(16)
    },
}
