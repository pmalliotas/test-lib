import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  Rating as $Rating,
  type RatingProps as $RatingProps,
} from "src/core"

export type RatingFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$RatingProps, "value" | "defaultValue">

export function RatingForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: RatingFormProps<T>) {
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
    <$Rating
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
