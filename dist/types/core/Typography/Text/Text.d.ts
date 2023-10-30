/// <reference types="react" />
import { type TextProps as MantineTextProps } from "@mantine/core";
export type TextProps = MantineTextProps & {};
export declare const Text: (<C = "p">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineTextProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineTextProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineTextProps> & {
    ref?: any;
    renderRoot?: ((props: any) => any) | undefined;
}) | (MantineTextProps & {
    component: import("react").ElementType<any>;
    renderRoot?: ((props: Record<string, any>) => any) | undefined;
})>, never> & Record<string, never>;
