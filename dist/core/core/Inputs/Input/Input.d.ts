/// <reference types="react" />
import { type InputProps as MantineInputProps } from "@mantine/core";
export type InputProps = MantineInputProps & {};
export declare const Input: (<C = "input">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineInputProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineInputProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineInputProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineInputProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
