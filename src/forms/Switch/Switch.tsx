import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  Switch as $Switch,
  type SwitchProps as $SwitchProps,
} from "../../core"
import { SwitchGroupForm } from "./SwitchGroup/SwitchGroup"

export type SwitchFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$SwitchProps, "value" | "checked" | "defaultValue">

export function SwitchForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: SwitchFormProps<T>) {
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
    <$Switch
      value={value}
      checked={value}
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

SwitchForm.Item = $Switch
SwitchForm.Group = SwitchGroupForm
