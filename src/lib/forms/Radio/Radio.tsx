import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import { Radio as $Radio, type RadioProps as $RadioProps } from "../../core"
import { RadioGroupForm } from "./RadioGroup/RadioGroup"

export type RadioFormProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<$RadioProps, "value" | "defaultValue">

export function RadioForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: RadioFormProps<T>) {
  const {
    field: { value, onChange: fieldOnChange, ...field },
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return (
    <$Radio
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

RadioForm.Group = RadioGroupForm
RadioForm.Item = $Radio
