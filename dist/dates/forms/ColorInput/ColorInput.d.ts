import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type ColorInputProps as $ColorInputProps } from "src/core";
export type ColorInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$ColorInputProps, "value" | "defaultValue">;
export declare function ColorInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ColorInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
