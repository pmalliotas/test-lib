import * as React from "react"

import { type FieldValues, useController, type UseControllerProps } from "react-hook-form"
import { Checkbox as $Checkbox } from "../../core"
import { type CheckboxProps as $CheckboxProps } from "../../core"
import { CheckboxGroupForm } from "./CheckboxGroup/CheckboxGroup"

export type CheckboxFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$CheckboxProps, "checked" | "defaultValue">

export const CheckboxForm = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: CheckboxFormProps<T>) => {
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
    <$Checkbox
      error={fieldState.error?.message}
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      {...field}
      {...props}
    />
  )
}

CheckboxForm.Group = CheckboxGroupForm
CheckboxForm.Item = $Checkbox
