import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type FileInputProps as $FileInputProps } from "src/core/Inputs/FileInput/FileInput";
export type FileInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$FileInputProps, "value" | "defaultValue">;
export declare function FileInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, multiple, ...props }: FileInputFormProps<T>): import("react/jsx-runtime").JSX.Element;
