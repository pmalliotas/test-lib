import * as React from "react"

import { type FieldValues, useController, type UseControllerProps } from "react-hook-form"

import {
  DatePickerInput as $DatePickerInput,
  type DatePickerInputProps as $DatePickerInputProps,
} from "../../dates"

export type DatePickerInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$DatePickerInputProps, "value" | "defaultValue">

export function DatePickerInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: DatePickerInputFormProps<T>) {
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
    <$DatePickerInput
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
