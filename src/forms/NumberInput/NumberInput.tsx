import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  NumberInput as $NumberInput,
  type NumberInputProps as $NumberInputProps,
} from "src/core"

export type NumberInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$NumberInputProps, "value" | "defaultValue">

export function NumberInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: NumberInputFormProps<T>) {
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
    <$NumberInput
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
