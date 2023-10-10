/// <reference types="react" />
import { type ImageProps as MantineImageProps } from "@mantine/core";
export type ImageProps = MantineImageProps & {};
export declare const Image: (<C = "img">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineImageProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineImageProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineImageProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineImageProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
