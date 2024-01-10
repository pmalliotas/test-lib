import React from "react"
import { IconBadge } from "@tabler/icons-react"
import { Switch } from "./Switch"
import { Group, Stack } from "@mantine/core"

export default { title: "Switch" }

export function Usage() {
  return (
    <div style={{ padding: 40, display: "flex", flexDirection: "column", rowGap: "2rem" }}>
      <Switch label="Unchecked" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
  )
}

export function Sizes() {
  return (
    <div style={{ padding: 40 }}>
      <Switch size="xs" label="xs" variant="test" />
      <Switch size="sm" label="sm" />
      <Switch size="md" label="md" />
      <Switch size="lg" label="lg" />
      <Switch size="xl" label="xl" />
    </div>
  )
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Switch label="Unstyled" unstyled />
    </div>
  )
}

export function WithLabels() {
  return (
    <Group m={4}>
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
    </Group>
  )
}

export function IconInsideThumb() {
  return <Switch size="lg" thumbIcon={<IconBadge color="black" size={12} />} label="Hello" />
}

export function SwitchGroup() {
  return (
    <>
      <Switch.Group
        defaultValue={["one", "three"]}
        m={4}
        label="Switch Group"
        description="Some description"
        classNames={{ label: "test-label" }}
      >
        <Switch value="one" label="one" />
        <Switch value="two" label="two" />
        <Switch value="three" label="three" />
      </Switch.Group>
    </>
  )
}

export function labelPosition() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Switch labelPosition="left" label="Hello from left" value="1" />
      <Switch labelPosition="right" label="Hello from right" value="1" />
    </Stack>
  )
}

export function WithDescription() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Switch
        description="This is left Checkbox, pretty big descriptions, make it more big"
        labelPosition="left"
        label="Hello from left"
        value="1"
      />
      <Switch
        description="This is right Checkbox, pretty big description"
        labelPosition="right"
        label="Hello from right"
        value="1"
      />
    </Stack>
  )
}

export function WithError() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Switch label="Error without message" value="1" error />
      <Switch
        error="This is another error"
        labelPosition="right"
        label="This is invalid Switch"
        value="1"
      />
      <Switch error="Error on Switch without label" value="1" />
    </Stack>
  )
}

export function Alignment() {
  return <Switch />
}
