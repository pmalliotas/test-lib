import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import { type ChipGroupProps as $ChipGroupProps } from "src/core"
import { ChipGroup as $ChipGroup } from "src/core"

export type ChipGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$ChipGroupProps<boolean>, "value" | "defaultValue">

export const ChipGroupForm = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ChipGroupFormProps<T>) => {
  const {
    field: { value, onChange: fieldOnChange, ref, ...field },
  } = useController<T>({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return (
    <$ChipGroup
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
