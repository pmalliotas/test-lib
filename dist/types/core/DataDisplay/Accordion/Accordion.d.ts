import { type AccordionProps as MantineAccordionProps } from "@mantine/core";
export type AccordionProps = MantineAccordionProps & {};
export declare const Accordion: {
    (props: AccordionProps): import("react/jsx-runtime").JSX.Element;
    Item: import("@mantine/core").MantineComponent<{
        props: import("@mantine/core").AccordionItemProps;
        ref: HTMLDivElement;
        stylesNames: "item";
        compound: true;
    }>;
    Panel: import("@mantine/core").MantineComponent<{
        props: import("@mantine/core").AccordionPanelProps;
        ref: HTMLDivElement;
        stylesNames: import("@mantine/core/lib/components/Accordion/AccordionPanel/AccordionPanel").AccordionPanelStylesNames;
        compound: true;
    }>;
    Control: import("@mantine/core").MantineComponent<{
        props: import("@mantine/core").AccordionControlProps;
        ref: HTMLButtonElement;
        stylesNames: import("@mantine/core/lib/components/Accordion/AccordionControl/AccordionControl").AccordionControlStylesNames;
        compound: true;
    }>;
    Chevron: typeof import("@mantine/core").AccordionChevron;
};
export default Accordion;
