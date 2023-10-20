import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { type YearPickerInputProps as $YearPickerInputProps } from "src/dates";
export declare type YearPickerInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$YearPickerInputProps, "value" | "defaultValue">;
export declare function YearPickerInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: YearPickerInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
