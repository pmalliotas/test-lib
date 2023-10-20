import { type UseControllerProps, type FieldValues } from "react-hook-form";
import type { ChipGroupProps as $ChipGroupProps } from "../../../core";
export declare type ChipGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$ChipGroupProps<boolean>, "value" | "defaultValue">;
export declare const ChipGroupForm: <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ChipGroupFormProps<T>) => import("react/jsx-runtime").JSX.Element;
