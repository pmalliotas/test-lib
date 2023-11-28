import * as React from "react"

import { AvatarFactory, Avatar as MantineAvatar, polymorphicFactory } from "@mantine/core"
import { type AvatarProps as MantineAvatarProps } from "@mantine/core"

export type AvatarProps = MantineAvatarProps & {}

type AvatarType = AvatarFactory & {
    props: AvatarProps
}

export const Avatar = polymorphicFactory<AvatarType>(((props, ref) => {
    return (
        <MantineAvatar {...props} ref={ref} />
    )
}))

Avatar.extend = MantineAvatar.extend
Avatar.Group = MantineAvatar.Group

export default Avatar