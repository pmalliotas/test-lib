/// <reference types="react" />
import { type ActionIconProps as MantineActionIconProps } from "@mantine/core";
export type ActionIconProps = MantineActionIconProps & {};
export declare const ActionIcon: (<C = "button">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineActionIconProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineActionIconProps & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof MantineActionIconProps | "component"> & {
    ref?: any;
    renderRoot?: ((props: any) => any) | undefined;
}) | (MantineActionIconProps & {
    component: import("react").ElementType<any>;
    renderRoot?: ((props: Record<string, any>) => any) | undefined;
})>, never> & Record<string, never>;
export default ActionIcon;
