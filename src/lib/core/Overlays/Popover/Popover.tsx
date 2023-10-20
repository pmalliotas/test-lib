import { Popover as MantinePopover } from "@mantine/core"
import { type PopoverProps as MantinePopoverProps } from "@mantine/core"

export type PopoverProps = MantinePopoverProps & {}

export function Popover(props: PopoverProps) {

    return (
        <MantinePopover {...props} />
    )
}
