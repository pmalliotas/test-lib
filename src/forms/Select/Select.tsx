import * as React from "react"

import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  Select as $Select,
  type SelectProps as $SelectProps,
} from "../../core"

export type SelectFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$SelectProps, "value" | "defaultValue">

export function SelectForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: SelectFormProps<T>) {
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
    <$Select
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
