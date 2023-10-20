import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type ColorPickerProps as $ColorPickerProps } from "../../core";
export type ColorPickerFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$ColorPickerProps, "value" | "defaultValue">;
export declare function ColorPickerForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ColorPickerFormProps<T>): import("react/jsx-runtime").JSX.Element;
