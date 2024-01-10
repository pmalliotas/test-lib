import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import classes from "./Checkbox.module.css"

import { PartialTransformVars } from "@mantine/core/lib/core/styles-api/create-vars-resolver/create-vars-resolver"
import { CheckboxCssVariables, CheckboxFactory } from "@mantine/core/lib/components/Checkbox"
import { rem } from "@mantine/core"

export const CheckboxConfig: ExtendsRootComponent<CheckboxFactory> = {
    defaultProps: {
        radius: "sm",
        w: rem(24),
        h: rem(24),
    },
    // vars: (_, props) => {
    //     const style = { root: {} }

    //     if ((props.color === "majorelle-blue" || !props.color) && (props.variant === "filled" || !props.variant)) {
    //         style.root["--"] = "#e3077f"
    //     }

    //     return style
    // },
    classNames: {
        input: classes.input,
    }
}
