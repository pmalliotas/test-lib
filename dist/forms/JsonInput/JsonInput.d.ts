import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type JsonInputProps as $JsonInputProps } from "src/core";
export declare type JsonInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$JsonInputProps, "value" | "defaultValue">;
export declare function JsonInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: JsonInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
