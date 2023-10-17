import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  MultiSelect as $MultiSelect,
  type MultiSelectProps as $MultiSelectProps,
} from "src/core"

export type MultiSelectFormProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$MultiSelectProps, "value" | "defaultValue">

export function MultiSelectForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: MultiSelectFormProps<T>) {
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
    <$MultiSelect
      value={value}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      error={fieldState.error?.message}
      {...field}
      {...props}
    />
  )
}
