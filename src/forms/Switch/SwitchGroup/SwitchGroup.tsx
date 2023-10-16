import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  SwitchGroup as $SwitchGroup,
  type SwitchGroupProps as $SwitchGroupProps,
} from "src/core"

export type SwitchGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$SwitchGroupProps, "value" | "checked" | "defaultValue">

export function SwitchGroupForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: SwitchGroupFormProps<T>) {
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
    <$SwitchGroup
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
