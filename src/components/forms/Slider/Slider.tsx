import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  Slider as $Slider,
  type SliderProps as $SliderProps,
} from "../../core"

export type SliderFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$SliderProps, "value" | "defaultValue">

export function SliderForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: SliderFormProps<T>) {
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
    <$Slider
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
