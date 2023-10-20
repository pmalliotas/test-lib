import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type NativeSelectProps as $NativeSelectProps } from "../../core";
export type NativeSelectFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$NativeSelectProps, "value" | "defaultValue">;
export declare function NativeSelectForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: NativeSelectFormProps<T>): import("react/jsx-runtime").JSX.Element;
