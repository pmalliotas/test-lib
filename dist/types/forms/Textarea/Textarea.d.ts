import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type TextareaProps as $TextareaProps } from "src/core";
export type TextareaFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$TextareaProps, "value" | "defaultValue">;
export declare function TextareaForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: TextareaFormProps<T>): import("react/jsx-runtime").JSX.Element;
