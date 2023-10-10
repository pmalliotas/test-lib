/// <reference types="react" />
import { type BadgeProps as MantineBadgeProps } from "@mantine/core";
export type BadgeProps = MantineBadgeProps & {};
export declare const Badge: (<C = "p">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineBadgeProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineBadgeProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof MantineBadgeProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineBadgeProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
