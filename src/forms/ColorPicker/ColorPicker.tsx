import * as React from "react"

import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import { ColorPicker as $ColorPicker } from "../../core"
import { type ColorPickerProps as $ColorPickerProps } from "../../core"

export type ColorPickerFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$ColorPickerProps, "value" | "defaultValue">

export function ColorPickerForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ColorPickerFormProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return (
    <$ColorPicker
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
