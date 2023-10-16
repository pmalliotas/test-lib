import { type FieldValues, type UseControllerProps } from "react-hook-form";
import { type MonthPickerInputProps as $MonthPickerInputProps } from "../../dates/MonthPickerInput/MonthPickerInput";
export type MonthPickerInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$MonthPickerInputProps, "value" | "defaultValue">;
export declare function MonthPickerInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: MonthPickerInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
