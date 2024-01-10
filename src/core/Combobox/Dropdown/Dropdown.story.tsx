import React from "react"
import { Dropdown } from "."
import { IconUser } from "@tabler/icons-react"

export default { title: "Dropdown" }

export function Usage() {
  const options = [{
    label: "Light",
    value: "light"
  }, {
    label: "Filled",
    value: "filled"
  }, {
    label: "Outline",
    value: "outline"
  }]

  const [value, setValue] = React.useState("")

  return (
    <div style={{ padding: 40, display: "flex", gap: 40 }}>
      <Dropdown
        value={value}
        onChange={setValue}
        options={options}
        leftSection={<IconUser />}
      >
        Light
      </Dropdown>
    </div>
  )
}