/// <reference types="react" />
import { type AnchorProps as MantineAnchorProps } from "@mantine/core";
export type AnchorProps = MantineAnchorProps & {};
export declare const Anchor: (<C = "a">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineAnchorProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineAnchorProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof MantineAnchorProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineAnchorProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
