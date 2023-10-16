import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { Checkbox as $Checkbox } from "src/core";
import { type CheckboxProps as $CheckboxProps } from "src/core";
export type CheckboxFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$CheckboxProps, "checked" | "defaultValue">;
export declare const CheckboxForm: {
    <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: CheckboxFormProps<T>): import("react/jsx-runtime").JSX.Element;
    Group: <T_1 extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: import("./CheckboxGroup/CheckboxGroup").CheckboxGroupFormProps<T_1>) => import("react/jsx-runtime").JSX.Element;
    Item: typeof $Checkbox;
};
