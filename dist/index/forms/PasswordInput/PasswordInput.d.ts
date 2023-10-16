import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type PasswordInputProps as $PasswordInputProps } from "../../core";
export type PasswordInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$PasswordInputProps, "value" | "defaultValue">;
export declare function PasswordInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: PasswordInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
