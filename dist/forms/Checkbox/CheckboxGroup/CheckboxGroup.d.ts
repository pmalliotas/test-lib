import { type CheckboxGroupProps as $CheckboxGroupProps } from "src/core";
import { type FieldValues, type UseControllerProps } from "react-hook-form";
export declare type CheckboxGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$CheckboxGroupProps, "checked" | "defaultValue">;
export declare const CheckboxGroupForm: <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: CheckboxGroupFormProps<T>) => import("react/jsx-runtime").JSX.Element;
