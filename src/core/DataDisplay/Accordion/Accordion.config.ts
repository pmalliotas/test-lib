import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import classes from "./Accordion.module.css"
import { AccordionProps } from "./Accordion"

import { PartialTransformVars } from "@mantine/core/lib/core/styles-api/create-vars-resolver/create-vars-resolver"
import { AccordionCssVariables } from "@mantine/core/lib/components/Accordion"

export const AccordionConfig = {
    defaultProps: {
    },
    classNames: {
        // root: classes.root,
        inner: classes.inner,
        label: classes.label,
        loader: classes.loader,
        section: classes.section,
    }
}
