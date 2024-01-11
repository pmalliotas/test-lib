import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import { AvatarType } from "./Avatar"

import { rem } from "../.."

export const AvatarConfig: ExtendsRootComponent<AvatarType> = {
    defaultProps: {
        radius: "md",
        w: rem(48),
        h: rem(48),
    },
}
