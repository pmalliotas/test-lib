import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Switch as $Switch, type SwitchProps as $SwitchProps } from "src/core";
import { SwitchGroupForm } from "./SwitchGroup/SwitchGroup";
export declare type SwitchFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$SwitchProps, "value" | "checked" | "defaultValue">;
export declare function SwitchForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SwitchFormProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace SwitchForm {
    var Item: typeof $Switch;
    var Group: typeof SwitchGroupForm;
}
