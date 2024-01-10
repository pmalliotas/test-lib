import * as React from "react"
import classes from "./Accordion.module.css"

import { Accordion as MantineAccordion } from "@mantine/core"
import { type AccordionProps as MantineAccordionProps } from "@mantine/core"

export type AccordionProps = MantineAccordionProps<boolean> & {}

export const Accordion = (props: AccordionProps) => {

    return (
        <MantineAccordion
            classNames={{
                root: classes.root,
                chevron: classes.chevron,
                item: classes.item,
                control: classes.control,
                label: classes.label,
                panel: classes.panel,
                icon: classes.icon,
                content: classes.content,
            }}
            {...props}
        />
    )
}

Accordion.Item = MantineAccordion.Item
Accordion.Panel = MantineAccordion.Panel
Accordion.Control = MantineAccordion.Control
Accordion.Chevron = MantineAccordion.Chevron

Accordion.extend = MantineAccordion.extend

export default Accordion
export { AccordionItem, AccordionPanel, AccordionControl, AccordionChevron } from "@mantine/core"
