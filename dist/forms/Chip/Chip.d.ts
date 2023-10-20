import { type UseControllerProps, type FieldValues } from "react-hook-form";
import { Chip as $Chip } from "src/core";
import { type ChipProps as $ChipProps } from "src/core";
export declare type ChipFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$ChipProps, "value" | "defaultValue">;
export declare const ChipForm: {
    <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ChipFormProps<T>): import("react/jsx-runtime").JSX.Element;
    Group: <T_1 extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: import("./ChipGroup/ChipGroup").ChipGroupFormProps<T_1>) => import("react/jsx-runtime").JSX.Element;
    Item: typeof $Chip;
};
