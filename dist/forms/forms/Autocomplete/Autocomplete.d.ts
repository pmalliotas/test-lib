import type { FieldValues, UseControllerProps } from "react-hook-form";
import type { AutocompleteProps as $AutocompleteProps } from "src/core";
export type AutocompleteFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$AutocompleteProps, "value" | "defaultValue">;
export declare function AutocompleteForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: AutocompleteFormProps<T>): import("react/jsx-runtime").JSX.Element;
