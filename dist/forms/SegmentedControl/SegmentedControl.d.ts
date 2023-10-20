import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { type SegmentedControlProps as $SegmentedControlProps } from "../../core";
export type SegmentedControlFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$SegmentedControlProps, "values" | "defaultValues">;
export declare function SegmentedControlForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SegmentedControlFormProps<T>): import("react/jsx-runtime").JSX.Element;
