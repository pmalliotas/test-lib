import { type FieldValues, useController, type UseControllerProps } from "react-hook-form"
import { DateInput as $DateInput, type DateInputProps as $DateInputProps } from "../../dates"

export type DateInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$DateInputProps, "value" | "defaultValue">

export function DateInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: DateInputFormProps<T>) {
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
    <$DateInput
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
