import * as React from "react"

import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  NativeSelect as $NativeSelect,
  type NativeSelectProps as $NativeSelectProps,
} from "../../core"


export type NativeSelectFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$NativeSelectProps, "value" | "defaultValue">

export function NativeSelectForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: NativeSelectFormProps<T>) {
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
    <$NativeSelect
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
