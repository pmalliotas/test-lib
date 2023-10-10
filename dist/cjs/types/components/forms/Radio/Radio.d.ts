import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Radio as $Radio, type RadioProps as $RadioProps } from "../../core";
import { RadioGroupForm } from "./RadioGroup/RadioGroup";
export type RadioFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$RadioProps, "value" | "defaultValue">;
export declare function RadioForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: RadioFormProps<T>): import("react/jsx-runtime").JSX.Element;
export declare namespace RadioForm {
    var Group: typeof RadioGroupForm;
    var Item: typeof $Radio;
}
