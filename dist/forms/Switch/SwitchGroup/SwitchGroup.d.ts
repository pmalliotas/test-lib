import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type SwitchGroupProps as $SwitchGroupProps } from "src/core";
export declare type SwitchGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$SwitchGroupProps, "value" | "checked" | "defaultValue">;
export declare function SwitchGroupForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SwitchGroupFormProps<T>): import("react/jsx-runtime").JSX.Element;
