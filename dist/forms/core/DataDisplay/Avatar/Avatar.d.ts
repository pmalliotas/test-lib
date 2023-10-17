/// <reference types="react" />
import { type AvatarProps as MantineAvatarProps } from "@mantine/core";
export type AvatarProps = MantineAvatarProps & {};
export declare const Avatar: (<C = "div">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantineAvatarProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantineAvatarProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantineAvatarProps> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (MantineAvatarProps & {
    component: import("react").ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;
export default Avatar;
