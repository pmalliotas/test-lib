import * as React from "react"
import classes from "./Dropdown.module.css"

import { InputPlaceholder, useCombobox } from "@mantine/core"
import { type ComboboxProps as MantineComboboxProps } from "../Combobox"
import { Combobox, ComboboxTarget, ComboboxDropdown, ComboboxOptions, ComboboxOption } from "../Combobox"
import { IconChevronDown, IconChevronUp, IconUser } from "@tabler/icons-react"
import { Input } from "../../Inputs"

type Option = {
  label: string
  value: string
}

export type DropdownProps = MantineComboboxProps & {
  value: string
  onChange: (value: string) => void
  options: Option[],
  leftSection?: React.ReactNode
}

export function Dropdown({ value, onChange, options, leftSection, size = "md", ...props }: DropdownProps) {

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const mappedOptions = options.map((item) => (
    <ComboboxOption value={item.value} key={item.value}>
      {item.label}
    </ComboboxOption>
  ))

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        onChange(val)
        combobox.closeDropdown()
      }}
      classNames={{
        dropdown: classes.dropdown,
      }}
      size={size}
      {...props}
    >
      <ComboboxTarget>
        <Input
          component="button"
          type="button"
          pointer
          leftSection={leftSection}
          rightSection={combobox.dropdownOpened ? <IconChevronUp /> : <IconChevronDown />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
          size={size}
          classNames={{
            // root: classes.inputRoot,
            section: value ? classes.inputSectionWithValue : classes.inputSectionWithoutValue,
            input: classes.input,
            wrapper: classes.inputWrapper,

          }}
        >
          {value || <InputPlaceholder>Pick value</InputPlaceholder>}
        </Input>
      </ComboboxTarget>

      <ComboboxDropdown>
        <ComboboxOptions>{mappedOptions}</ComboboxOptions>
      </ComboboxDropdown>
    </Combobox>
  )
}

export default Dropdown