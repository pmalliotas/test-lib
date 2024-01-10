import React from "react"
import { Anchor } from "./Anchor"

export default { title: "Anchor" }

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor href="https://mantine.dev" target="blank" underline="never">
        Mantine website link: never
      </Anchor>
      <br />
      <Anchor href="https://mantine.dev" target="blank">
        Mantine website link: hover
      </Anchor>
      <br />
      <Anchor href="https://mantine.dev" target="blank" disabled>
        Disabled mantine website link
      </Anchor>
      <br />
      <Anchor
        href="https://mantine.dev"
        target="blank"
        underline="never"
        variant="gradient"
        fz={60}
        fw="bold"
      >
        Mantine website link: never
      </Anchor>
    </div>
  )
}