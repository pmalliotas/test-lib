import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type SelectProps as $SelectProps } from "../../core";
export type SelectFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$SelectProps, "value" | "defaultValue">;
export declare function SelectForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SelectFormProps<T>): import("react/jsx-runtime").JSX.Element;
