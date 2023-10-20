import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type SliderProps as $SliderProps } from "src/core";
export declare type SliderFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$SliderProps, "value" | "defaultValue">;
export declare function SliderForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SliderFormProps<T>): import("react/jsx-runtime").JSX.Element;
