import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type TextInputProps as $TextInputProps } from "../../core";
export type TextInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$TextInputProps, "value" | "defaultValue">;
export declare function TextInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: TextInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
