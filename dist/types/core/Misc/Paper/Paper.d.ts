/// <reference types="react" />
import { type PaperProps as MantinePaperProps } from "@mantine/core";
export type PaperProps = MantinePaperProps & {};
export declare const Paper: (<C = "div">(props: import("@mantine/core/lib/core/factory/create-polymorphic-component").PolymorphicComponentProps<C, MantinePaperProps>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & Omit<import("react").FunctionComponent<(MantinePaperProps & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof MantinePaperProps> & {
    ref?: any;
    renderRoot?: ((props: any) => any) | undefined;
}) | (MantinePaperProps & {
    component: import("react").ElementType<any>;
    renderRoot?: ((props: Record<string, any>) => any) | undefined;
})>, never> & Record<string, never>;
