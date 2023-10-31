import { Chip as MantineChip, ChipGroup as MantineChipGroup } from "@mantine/core"
import { type ChipProps as MantineChipProps, type ChipGroupProps as MantineChipGroupProps } from "@mantine/core"

export type ChipProps = MantineChipProps & {}
export type ChipGroupProps<T> = MantineChipGroupProps<T extends boolean ? boolean : boolean> & {}

export function Chip(props: ChipProps) {

    return (
        <MantineChip {...props} />
    )
}

export function ChipGroup(props: ChipGroupProps<boolean>) {

    return (
        <MantineChipGroup {...props} />
    )
}

Chip.Group = MantineChip.Group
Chip.extend = MantineChip.extend