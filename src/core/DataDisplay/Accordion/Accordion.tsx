import * as React from "react"

import { Accordion as MantineAccordion } from "@mantine/core"
import { type AccordionProps as MantineAccordionProps } from "@mantine/core"

export type AccordionProps = MantineAccordionProps & {}

export const Accordion = (props: AccordionProps) => {

    return (
        <MantineAccordion {...props} />
    )
}

Accordion.Item = MantineAccordion.Item
Accordion.Panel = MantineAccordion.Panel
Accordion.Control = MantineAccordion.Control
Accordion.Chevron = MantineAccordion.Chevron

Accordion.extend = MantineAccordion.extend

export default Accordion