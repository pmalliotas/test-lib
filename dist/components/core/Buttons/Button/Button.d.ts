/// <reference types="react" />
import { type ButtonProps as MantineButtonProps } from "@mantine/core";
export type ButtonProps = MantineButtonProps & {};
export declare const Button: (<C = "button">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineButtonProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineButtonProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof MantineButtonProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineButtonProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
