/// <reference types="react" />
import { type BadgeProps as MantineBadgeProps } from "@mantine/core";
export type BadgeProps = MantineBadgeProps & {};
export declare const Badge: (<C = "p">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineBadgeProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineBadgeProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineBadgeProps> & {
    ref?: any;
    renderRoot?: ((props: any) => any) | undefined;
}) | (MantineBadgeProps & {
    component: import("react").ElementType<any>;
    renderRoot?: ((props: Record<string, any>) => any) | undefined;
})>, never> & Record<string, never>;
export default Badge;
