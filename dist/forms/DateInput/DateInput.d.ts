import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { type DateInputProps as $DateInputProps } from "src/dates";
export type DateInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$DateInputProps, "value" | "defaultValue">;
export declare function DateInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: DateInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
