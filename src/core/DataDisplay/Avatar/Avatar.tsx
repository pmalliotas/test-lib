import * as React from "react"

import { AvatarFactory, Avatar as MantineAvatar, polymorphicFactory } from "@mantine/core"
import { type AvatarProps as MantineAvatarProps } from "@mantine/core"
import { Indicator } from "../Indicator"
import { COLORS } from "../../../styles/utils"
import { rem } from "../.."

export enum AVATAR_STATUS {
    AVAILABLE = "AVAILABLE",
    BUSY = "BUSY",
    NOT_AVAILABLE = "NOT_AVAILABLE"
}

const STATUS_COLORS: Record<AVATAR_STATUS, keyof typeof COLORS> = {
    [AVATAR_STATUS.AVAILABLE]: "harlequin-green",
    [AVATAR_STATUS.BUSY]: "crayola",
    [AVATAR_STATUS.NOT_AVAILABLE]: "coral-red"
}

export type AvatarProps = MantineAvatarProps & {
    status?: AVATAR_STATUS
}

export type AvatarType = AvatarFactory & {
    props: AvatarProps
}

export const Avatar = polymorphicFactory<AvatarType>(((props, ref) => {
    if (props.status) {
        return (
            <Indicator color={STATUS_COLORS[props.status]} withBorder size={rem(16)} offset={2}>
                <MantineAvatar {...props} ref={ref} />
            </Indicator>
        )
    }

    return (
        <MantineAvatar {...props} ref={ref} />
    )
}))

Avatar.extend = MantineAvatar.extend
Avatar.Group = MantineAvatar.Group

export { AvatarGroup } from "@mantine/core"
export default Avatar