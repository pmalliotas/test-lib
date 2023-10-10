import { NavLink as MantineNavLink, createPolymorphicComponent } from "@mantine/core"
import { type NavLinkProps as MantineNavLinkProps } from "@mantine/core"
import { forwardRef } from "react"

export type NavLinkProps = MantineNavLinkProps & {}

export const NavLink = createPolymorphicComponent<"a", NavLinkProps>(forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
    return (
        <MantineNavLink {...props} ref={ref} />
    )
}))

