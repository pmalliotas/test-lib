import { Accordion as MantineAccordion } from "@mantine/core"
import { type AccordionProps as MantineAccordionProps } from "@mantine/core"

export type AccordionProps = MantineAccordionProps & {}

export function Accordion(props: AccordionProps) {

    return (
        <MantineAccordion {...props} />
    )
}