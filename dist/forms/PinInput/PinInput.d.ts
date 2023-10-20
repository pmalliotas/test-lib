import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type PinInputProps as $PinInputProps } from "../../core";
export declare type PinInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$PinInputProps, "value" | "defaultValue">;
export declare function PinInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: PinInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
