import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type NumberInputProps as $NumberInputProps } from "../../core";
export type NumberInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$NumberInputProps, "value" | "defaultValue">;
export declare function NumberInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: NumberInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
