import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import classes from "./Button.module.css"
import { ButtonType } from "./Button"

export const ButtonConfig: ExtendsRootComponent<ButtonType> = {
    defaultProps: {
        color: "majorelle-blue",
    },
    classNames: {
        root: classes.root,
        inner: classes.inner,
        label: classes.label,
        loader: classes.loader,
        section: classes.section,
    }
}
