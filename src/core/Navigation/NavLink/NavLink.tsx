import * as React from "react"

import { NavLink as MantineNavLink, NavLinkFactory, polymorphicFactory } from "@mantine/core"
import { type NavLinkProps as MantineNavLinkProps } from "@mantine/core"

export type NavLinkProps = MantineNavLinkProps & {}

type NavLinkType = NavLinkFactory & {
    props: NavLinkProps
}

export const NavLink = polymorphicFactory<NavLinkType>(((props, ref) => {
    return (
        <MantineNavLink {...props} ref={ref} />
    )
}))

NavLink.extend = MantineNavLink.extend