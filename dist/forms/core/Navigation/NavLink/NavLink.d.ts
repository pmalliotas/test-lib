/// <reference types="react" />
import { type NavLinkProps as MantineNavLinkProps } from "@mantine/core";
export type NavLinkProps = MantineNavLinkProps & {};
export declare const NavLink: (<C = "a">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineNavLinkProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineNavLinkProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineNavLinkProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineNavLinkProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
