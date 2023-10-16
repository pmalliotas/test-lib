import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import { ColorInput as $ColorInput } from "src/core"
import { type ColorInputProps as $ColorInputProps } from "src/core"

export type ColorInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$ColorInputProps, "value" | "defaultValue">

export function ColorInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ColorInputFormProps<T>) {
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
    <$ColorInput
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
