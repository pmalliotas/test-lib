import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import {
  SegmentedControl as $SegmentedControl,
  type SegmentedControlProps as $SegmentedControlProps,
} from "src/core"

export type SegmentedControlFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$SegmentedControlProps, "values" | "defaultValues">

export function SegmentedControlForm<T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: SegmentedControlFormProps<T>) {
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
    <$SegmentedControl
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
