import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  PinInput as $PinInput,
  type PinInputProps as $PinInputProps,
} from "src/core"

export type PinInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$PinInputProps, "value" | "defaultValue">

export function PinInputForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: PinInputFormProps<T>) {
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
    <$PinInput
      value={value}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      error={!(fieldState.error?.message == null)}
      {...field}
      {...props}
    />
  )
}
