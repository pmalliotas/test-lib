import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import classes from "./Button.module.css"
import { ButtonType } from "./Button"

import { PartialTransformVars } from "@mantine/core/lib/core/styles-api/create-vars-resolver/create-vars-resolver"
import { ButtonCssVariables } from "@mantine/core/lib/components/Button"

export const ButtonConfig: ExtendsRootComponent<ButtonType> = {
    defaultProps: {
        color: "majorelle-blue",
    },
    vars: (_, props) => {
        const style: PartialTransformVars<ButtonCssVariables> = { root: {} }

        if ((props.color === "majorelle-blue" || !props.color) && (props.variant === "filled" || !props.variant)) {
            style.root["--button-hover"] = "#e3077f"
        }
        return style
    },
    classNames: {
        // root: classes.root,
        inner: classes.inner,
        label: classes.label,
        loader: classes.loader,
        section: classes.section,
    }
}
