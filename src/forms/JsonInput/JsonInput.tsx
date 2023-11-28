import * as React from "react"

import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  JsonInput as $JsonInput,
  type JsonInputProps as $JsonInputProps,
} from "../../core"

export type JsonInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$JsonInputProps, "value" | "defaultValue">

export function JsonInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: JsonInputFormProps<T>) {
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
    <$JsonInput
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
