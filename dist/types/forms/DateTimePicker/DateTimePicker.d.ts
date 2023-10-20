import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { type DateTimePickerProps as $DateTimePickerProps } from "../../dates";
export type DateTimePickerFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$DateTimePickerProps, "value" | "defaultValue">;
export declare function DateTimePickerForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: DateTimePickerFormProps<T>): import("react/jsx-runtime").JSX.Element;
