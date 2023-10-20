import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { type DatePickerInputProps as $DatePickerInputProps } from "../../dates";
export declare type DatePickerInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$DatePickerInputProps, "value" | "defaultValue">;
export declare function DatePickerInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: DatePickerInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
