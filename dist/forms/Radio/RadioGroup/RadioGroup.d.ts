import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type RadioGroupProps as $RadioGroupProps } from "../../../core";
export declare type RadioGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$RadioGroupProps, "value" | "defaultValue">;
export declare function RadioGroupForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: RadioGroupFormProps<T>): import("react/jsx-runtime").JSX.Element;
