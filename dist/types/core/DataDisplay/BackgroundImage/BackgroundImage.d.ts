/// <reference types="react" />
import { type BackgroundImageProps as MantineBackgroundImageProps } from "@mantine/core";
export type BackgroundImageProps = MantineBackgroundImageProps & {};
export declare const BackgroundImage: (<C = "div">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineBackgroundImageProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineBackgroundImageProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineBackgroundImageProps> & {
    ref?: any;
    renderRoot?: ((props: any) => any) | undefined;
}) | (MantineBackgroundImageProps & {
    component: import("react").ElementType<any>;
    renderRoot?: ((props: Record<string, any>) => any) | undefined;
})>, never> & Record<string, never>;
export default BackgroundImage;
