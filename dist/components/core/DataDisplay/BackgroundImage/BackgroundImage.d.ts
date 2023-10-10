/// <reference types="react" />
import { type BackgroundImageProps as MantineBackgroundImageProps } from "@mantine/core";
export type BackgroundImageProps = MantineBackgroundImageProps & {};
export declare const BackgroundImage: (<C = "div">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineBackgroundImageProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineBackgroundImageProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof MantineBackgroundImageProps | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineBackgroundImageProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
