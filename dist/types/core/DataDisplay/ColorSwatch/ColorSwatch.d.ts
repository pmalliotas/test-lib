/// <reference types="react" />
import { type ColorSwatchProps as MantineColorSwatchProps } from "@mantine/core";
export type ColorSwatchProps = MantineColorSwatchProps & {};
export declare const ColorSwatch: (<C = "div">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineColorSwatchProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineColorSwatchProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineColorSwatchProps> & {
    ref?: any;
    renderRoot?: ((props: any) => any) | undefined;
}) | (MantineColorSwatchProps & {
    component: import("react").ElementType<any>;
    renderRoot?: ((props: Record<string, any>) => any) | undefined;
})>, never> & Record<string, never>;
export default ColorSwatch;
