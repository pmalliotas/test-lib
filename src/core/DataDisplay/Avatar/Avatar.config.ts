import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import classes from "./Avatar.module.css"
import { AvatarType } from "./Avatar"

import { PartialTransformVars } from "@mantine/core/lib/core/styles-api/create-vars-resolver/create-vars-resolver"
import { AvatarCssVariables } from "@mantine/core/lib/components/Avatar"
import { rem } from "../.."

export const AvatarConfig: ExtendsRootComponent<AvatarType> = {
    defaultProps: {
        color: "majorelle-blue",
        radius: "md",
        w: rem(48),
        h: rem(48),
    },
    vars: (_, props) => {
        const style: PartialTransformVars<AvatarCssVariables> = { root: {} }

        return style
    },
    classNames: {
        // root: classes.root,
        // inner: classes.inner,
        // label: classes.label,
        // loader: classes.loader,
        // section: classes.section,
    }
}
