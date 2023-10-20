import { type YearPickerProps as MantineYearPickerProps, type DatePickerType } from "@mantine/dates";
export type YearPickerProps<T extends DatePickerType = "default"> = MantineYearPickerProps<T> & {};
export declare function YearPicker(props: YearPickerProps): import("react/jsx-runtime").JSX.Element;
