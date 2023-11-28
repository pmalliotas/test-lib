import * as React from "react"

import { type FieldValues, useController, type UseControllerProps } from "react-hook-form"
import {
  TimeInput as $TimeInput,
  type TimeInputProps as $TimeInputProps,
} from "../../dates"

export type TimeInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$TimeInputProps, "value" | "defaultValue">

export function TimeInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TimeInputFormProps<T>) {
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
    <$TimeInput
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
