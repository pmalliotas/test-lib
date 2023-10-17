import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type MultiSelectProps as $MultiSelectProps } from "src/core";
export type MultiSelectFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$MultiSelectProps, "value" | "defaultValue">;
export declare function MultiSelectForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: MultiSelectFormProps<T>): import("react/jsx-runtime").JSX.Element;
