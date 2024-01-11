import React from "react"
import { Button, ButtonProps } from "./Button"
import { PRIMARY_COLORS } from "../../../../src/styles/utils"
import { Icon12Hours } from "@tabler/icons-react"
export default { title: "Button" }

// export function RenderRoot() {
//   return (
//     <Button renderRoot={(props) => <a {...props} href="#" />} className="test">
//       Some content
//     </Button>
//   )
// }
export function SingleButton() {
  return (
    <div style={{ padding: 40 }}>
      <div>
        <Button variant="outline" size="xl">
          Button
        </Button>
      </div>
      <div>
        <Button disabled variant="outline" size="xl">
          Button
        </Button>
      </div>
    </div>
  )
}

function Colors({ index, ...others }: ButtonProps & { index?: number }) {
  const colors = Object.keys(PRIMARY_COLORS).map((color) => (
    <Button
      // @ts-expect-error - TODO - allow indexes 
      color={`${color}${typeof index === "number" ? `.${index}` : ""}`}
      key={color}
      leftSection={<Icon12Hours />}
      {...others}
    >
      Button
    </Button>
  ))
  return <div style={{ display: "flex", gap: 20, padding: 40 }}>{colors}</div>
}

export function Usage() {
  return (
    <>
      Filled variant:
      <Colors />
      Filled variant index
      <Colors index={4} />
      Light variant:
      <Colors variant="light" />
      Subtle variant:
      <Colors variant="subtle" />
      Outline variant:
      <Colors variant="outline" disabled />
      Transparent variant:
      <Colors variant="transparent" />
      <div style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
        White variant:
        <Colors variant="white" />
        White variant index:
        <Colors variant="white" index={4} />
      </div>
    </>
  )
}

export function Sizes() {
  return (
    <>
      <div style={{ padding: 40 }}>
        <Button leftSection={<Icon12Hours />} size="xs">Button xs</Button>
        <Button leftSection={<Icon12Hours />} size="sm">Button sm</Button>
        <Button leftSection={<Icon12Hours />} size="md">Button md</Button>
        <Button leftSection={<Icon12Hours />} size="lg">Button lg</Button>
        <Button leftSection={<Icon12Hours />} size="xl">Button xl</Button>
      </div>

      <div style={{ padding: 40 }}>
        <Button leftSection={<Icon12Hours />} size="compact-xs">Button compact xs</Button>
        <Button leftSection={<Icon12Hours />} size="compact-sm">Button compact sm</Button>
        <Button leftSection={<Icon12Hours />} size="compact-md">Button compact md</Button>
        <Button leftSection={<Icon12Hours />} size="compact-lg">Button compact lg</Button>
        <Button leftSection={<Icon12Hours />} size="compact-xl">Button compact xl</Button>
      </div>
    </>
  )
}

export function GradientVariant() {
  return (
    <div style={{ padding: 40, display: "flex", gap: 40 }}>
      <Button size="lg" variant="gradient">
        Button
      </Button>
      <Button size="lg" variant="gradient" gradient={{ from: "red", to: "cyan" }}>
        Button
      </Button>
      <Button size="lg" variant="gradient" gradient={{ from: "#FF00FF", to: "#00FF00" }}>
        Button
      </Button>
    </div>
  )
}

export function AsLink() {
  return (
    <div style={{ padding: 40 }}>
      <Button
        size="xl"
        component="a"
        href="https://mantine.dev"
        onClick={(event) => event.preventDefault()}
      >
        Button
      </Button>
      {/* @ts-expect-error - TODO sd */}
      <Button size="xl" onClick={(event) => event.preventDefault()}>
        Button
      </Button>
    </div>
  )
}

export function Loading() {
  return (
    <div style={{ padding: 40, display: "flex", gap: 20 }}>
      <Button loading size="xs">
        Button xs
      </Button>
      <Button loading size="sm">
        Button sm
      </Button>
      <Button loading size="md">
        Button md
      </Button>
      <Button loading size="lg">
        Button lg
      </Button>
      <Button loading size="xl">
        Button xl
      </Button>
    </div>
  )
}

export function ToggleLoading() {
  const [loading, setLoading] = React.useState(false)
  return (
    <div style={{ padding: 40, display: "flex", gap: 20 }}>
      <Button loading={loading} size="lg">
        Save to database
      </Button>

      <Button onClick={() => setLoading((l) => !l)} size="lg">
        Toggle loading state
      </Button>
    </div>
  )
}

export function Disabled() {
  return (
    <div style={{ padding: 40, display: "flex", gap: 20 }}>
      <Button disabled size="lg">
        Button
      </Button>
    </div>
  )
}

export function Sections() {
  return (
    <div style={{ padding: 40, display: "flex", gap: 20 }}>
      <Button leftSection="L">With Left</Button>
      <Button rightSection="R">With Right</Button>
      <Button leftSection="L" rightSection="R">
        With Both
      </Button>
    </div>
  )
}

export function ButtonGroup() {
  return (
    <div style={{ padding: 40, display: "flex", gap: 20 }}>
      <Button size="lg" variant="default">
        S
      </Button>
      <Button.Group>
        <Button size="lg" variant="default">
          S
        </Button>
      </Button.Group>

      <Button.Group borderWidth={1}>
        <Button size="lg" variant="default" component="a" href="https://mantine.dev">
          2
        </Button>
        <Button size="lg" variant="default">
          1
        </Button>

        <Button size="lg" variant="default">
          2
        </Button>
        <Button size="lg" variant="default">
          3
        </Button>
      </Button.Group>

      <Button.Group orientation="vertical">
        <Button size="lg" variant="default">
          1
        </Button>
        <Button size="lg" variant="default">
          2
        </Button>
        <Button size="lg" variant="default">
          2
        </Button>
        <Button size="lg" variant="default">
          3
        </Button>
      </Button.Group>
    </div>
  )
}