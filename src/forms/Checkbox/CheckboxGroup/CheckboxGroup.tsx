import { type CheckboxGroupProps as $CheckboxGroupProps } from "../../../core"
import { CheckboxGroup as $CheckboxGroup } from "../../../core"

import { type FieldValues, type UseControllerProps } from "react-hook-form"
import { useController } from "react-hook-form"

export type CheckboxGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$CheckboxGroupProps, "checked" | "defaultValue">

export const CheckboxGroupForm = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: CheckboxGroupFormProps<T>) => {
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
    <$CheckboxGroup
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
