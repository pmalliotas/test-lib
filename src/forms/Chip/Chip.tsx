import { type UseControllerProps, useController, type FieldValues } from "react-hook-form"
import { Chip as $Chip } from "../../core"
import { type ChipProps as $ChipProps } from "../../core"
import { ChipGroupForm } from "./ChipGroup/ChipGroup"

export type ChipFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<$ChipProps, "value" | "defaultValue">

export const ChipForm = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: ChipFormProps<T>) => {
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
    <$Chip
      value={value}
      checked={value}
      onChange={(e) => {
        fieldOnChange(e)
        onChange?.(e)
      }}
      {...field}
      {...props}
    />
  )
}

ChipForm.Group = ChipGroupForm
ChipForm.Item = $Chip
