import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  PasswordInput as $PasswordInput,
  type PasswordInputProps as $PasswordInputProps,
} from "../../core"

export type PasswordInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$PasswordInputProps, "value" | "defaultValue">

export function PasswordInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: PasswordInputFormProps<T>) {
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
    <$PasswordInput
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
