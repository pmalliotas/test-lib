import { type ChipProps as MantineChipProps, type ChipGroupProps as MantineChipGroupProps } from "@mantine/core";
export type ChipProps = MantineChipProps & {};
export type ChipGroupProps<T> = MantineChipGroupProps<T extends boolean ? boolean : boolean> & {};
export declare function Chip(props: ChipProps): import("react/jsx-runtime").JSX.Element;
export declare function ChipGroup(props: ChipGroupProps<boolean>): import("react/jsx-runtime").JSX.Element;