/// <reference types="react" />
import { type BoxProps as MantineBoxProps } from "@mantine/core";
export type BoxProps = MantineBoxProps & {};
export declare const Box: (<C = "div">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineBoxProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineBoxProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineBoxProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineBoxProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
