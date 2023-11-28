import * as React from "react"

import { type FieldValues, useController, type UseControllerProps } from "react-hook-form"
import {
  YearPickerInput as $YearPickerInput,
  type YearPickerInputProps as $YearPickerInputProps,
} from "../../dates"

export type YearPickerInputFormProps<T extends FieldValues> =
  UseControllerProps<T> &
  Omit<$YearPickerInputProps, "value" | "defaultValue">

export function YearPickerInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: YearPickerInputFormProps<T>) {
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
    <$YearPickerInput
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
