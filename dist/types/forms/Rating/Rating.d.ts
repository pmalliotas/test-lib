import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type RatingProps as $RatingProps } from "../../core";
export type RatingFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$RatingProps, "value" | "defaultValue">;
export declare function RatingForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: RatingFormProps<T>): import("react/jsx-runtime").JSX.Element;
