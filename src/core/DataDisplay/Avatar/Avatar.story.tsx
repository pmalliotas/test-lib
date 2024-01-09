import React from "react"
import { AVATAR_STATUS, Avatar } from "./Avatar"
import { Tooltip } from "../../Overlays"
import { Group, Stack } from "../../Layout"

export default { title: "Avatar" }

export function Usage() {
  return (
    <div style={{ padding: 40, width: "max-content" }}>
      <Avatar status={AVATAR_STATUS.AVAILABLE}>AN</Avatar>
    </div>
  )
}

export function AvatarGroup() {
  return (
    <div style={{ padding: 40 }}>
      <Avatar.Group>
        <Tooltip label="Hello">
          <Avatar radius="xl" color="cetacean-blue">
            AN
          </Avatar>
        </Tooltip>
        <Tooltip label="Hello">
          <Avatar radius="xl" color="coral-red">
            BU
          </Avatar>
        </Tooltip>
        <Avatar radius="xl">+3</Avatar>
      </Avatar.Group>
    </div>
  )
}

export function Variants() {
  return (
    <div style={{ padding: "40px" }}>
      <Stack>
        <Group>
          {["filled", "light", "white", "default", "gradient", "outline"].map((variant) => (
            <Avatar status={AVATAR_STATUS.AVAILABLE} key={variant} variant={variant} color="fresh-sky-blue" radius="md">
              ZH
            </Avatar>
          ))}
        </Group>

        <Group>
          {["filled", "light", "white", "default", "gradient", "outline"].map((variant) => (
            <Avatar status={AVATAR_STATUS.BUSY} key={variant} variant={variant} color="fresh-sky-blue" radius="md" />
          ))}
        </Group>

        <Group>
          {["filled", "light", "white", "default", "gradient", "outline"].map((variant) => (
            <Avatar
              key={variant}
              status={AVATAR_STATUS.NOT_AVAILABLE}
              variant={variant}
              color="fresh-sky-blue"
              radius="md"
              src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          ))}
        </Group>
      </Stack>
    </div>
  )
}