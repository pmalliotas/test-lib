/// <reference types="react" />
import { type UnstyledButtonProps as MantineUnstyledButtonProps } from "@mantine/core";
export type UnstyledButtonProps = MantineUnstyledButtonProps & {};
export declare const UnstyledButton: (<C = "button">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineUnstyledButtonProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineUnstyledButtonProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof MantineUnstyledButtonProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineUnstyledButtonProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
