import React from "react"
import { Radio } from "./Radio"
import { Stack } from "@mantine/core"

export default { title: "Radio" }

export function Sizes() {
  const items = (["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
    <Radio.Group defaultValue="ng" style={{ display: "flex", flexDirection: "column", rowGap: "2rem" }} key={size} size={size}>
      <Radio label="React" value="react" />
      <Radio label="Angular" value="ng" />
      <Radio label="Svelte" value="sv" disabled />
    </Radio.Group>
  ))

  return (
    <div style={{ padding: 20 }}>
      <Stack>
        <Stack gap={"2rem"}>
          Independent Radio buttons:
          <Radio label="React" value="react" size="xs" />
          <Radio label="React" value="react" size="sm" />
          <Radio label="React" value="react" size="md" />
          <Radio label="React" value="react" size="lg" />
          <Radio label="React" value="react" size="xl" />
        </Stack>
        <Stack gap={"2rem"}>
          Radio Group:
          {items}
        </Stack>
        <Stack gap={"2rem"}>
          Override size of specific radio button in group:
          <Radio.Group style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }} size="sm">
            <Radio label="default" value="def1" />
            <Radio label="xs" value="xs" size="xs" />
            <Radio label="sm" value="sm" size="sm" />
            <Radio label="md" value="md" size="md" />
            <Radio label="lg" value="lg" size="lg" />
            <Radio label="xl" value="xl" size="xl" fz={36} />
            <Radio label="default" value="def2" />
          </Radio.Group>
        </Stack>
      </Stack>
    </div>
  )
}
