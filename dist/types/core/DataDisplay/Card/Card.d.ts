/// <reference types="react" />
import { type CardProps as MantineCardProps } from "@mantine/core";
export type CardProps = MantineCardProps & {};
export declare const Card: (<C = "div">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineCardProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineCardProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineCardProps> & {
    ref?: any;
    renderRoot?: ((props: any) => any) | undefined;
}) | (MantineCardProps & {
    component: import("react").ElementType<any>;
    renderRoot?: ((props: Record<string, any>) => any) | undefined;
})>, never> & Record<string, never>;
export default Card;
