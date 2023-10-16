/// <reference types="react" />
import { type CenterProps as MantineCenterProps } from "@mantine/core";
export type CenterProps = MantineCenterProps & {};
export declare const Center: (<C = "div">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineCenterProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineCenterProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineCenterProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineCenterProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
