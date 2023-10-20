import { Avatar as MantineAvatar, createPolymorphicComponent } from "@mantine/core"
import { type AvatarProps as MantineAvatarProps } from "@mantine/core"
import { forwardRef } from "react"

export type AvatarProps = MantineAvatarProps & {}

export const Avatar: React.FC<AvatarProps> = createPolymorphicComponent<"div", AvatarProps>(forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
    return (
        <MantineAvatar {...props} ref={ref} />
    )
}))


export default Avatar