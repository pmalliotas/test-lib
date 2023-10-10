import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  Textarea as $Textarea,
  type TextareaProps as $TextareaProps,
} from "../../core"

export type TextareaFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$TextareaProps, "value" | "defaultValue">

export function TextareaForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: TextareaFormProps<T>) {
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
    <$Textarea
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
