import { type FieldValues, useController, type UseControllerProps } from "react-hook-form"
import {
  MonthPickerInput as $MonthPickerInput,
  type MonthPickerInputProps as $MonthPickerInputProps,
} from "../../dates"

export type MonthPickerInputFormProps<T extends FieldValues> =
  UseControllerProps<T> &
  Omit<$MonthPickerInputProps, "value" | "defaultValue">

export function MonthPickerInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: MonthPickerInputFormProps<T>) {
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
    <$MonthPickerInput
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
