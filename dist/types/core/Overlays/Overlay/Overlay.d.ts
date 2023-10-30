/// <reference types="react" />
import { type OverlayProps as MantineOverlayProps } from "@mantine/core";
export type OverlayProps = MantineOverlayProps & {};
export declare const Overlay: (<C = "div">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineOverlayProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineOverlayProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineOverlayProps> & {
    ref?: any;
    renderRoot?: ((props: any) => any) | undefined;
}) | (MantineOverlayProps & {
    component: import("react").ElementType<any>;
    renderRoot?: ((props: Record<string, any>) => any) | undefined;
})>, never> & Record<string, never>;
