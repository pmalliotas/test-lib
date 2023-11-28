import * as React from "react"

import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  TextInput as $TextInput,
  type TextInputProps as $TextInputProps,
} from "../../core"

export type TextInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$TextInputProps, "value" | "defaultValue">

export function TextInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TextInputFormProps<T>) {
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
    <$TextInput
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
