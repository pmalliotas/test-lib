import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { type TimeInputProps as $TimeInputProps } from "../../dates";
export declare type TimeInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$TimeInputProps, "value" | "defaultValue">;
export declare function TimeInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: TimeInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
