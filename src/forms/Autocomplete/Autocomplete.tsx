import type { FieldValues, UseControllerProps } from "react-hook-form"
import { useController } from "react-hook-form"
import { Autocomplete as $Autocomplete } from "src/core"
import type { AutocompleteProps as $AutocompleteProps } from "src/core"

export type AutocompleteFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$AutocompleteProps, "value" | "defaultValue">

export function AutocompleteForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: AutocompleteFormProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
    fieldState,
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return (
    <$Autocomplete
      error={fieldState.error?.message}
      value={value}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      {...field}
      {...props}
    />
  )
}
