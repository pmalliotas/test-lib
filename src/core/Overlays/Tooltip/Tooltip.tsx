import { Tooltip as MantineTooltip } from "@mantine/core"
import { type TooltipProps as MantineTooltipProps } from "@mantine/core"

export type TooltipProps = MantineTooltipProps & {}
export function Tooltip(props: TooltipProps) {

    return (
        <MantineTooltip {...props} />
    )
}

Tooltip.Floating = MantineTooltip.Floating
Tooltip.Group = MantineTooltip.Group

Tooltip.extend = MantineTooltip.extend