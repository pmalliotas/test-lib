import { Breadcrumbs as MantineBreadcrumbs } from "@mantine/core"
import { type BreadcrumbsProps as MantineBreadcrumbsProps } from "@mantine/core"

export type BreadcrumbsProps = MantineBreadcrumbsProps & {}

export function Breadcrumbs(props: BreadcrumbsProps) {

    return (
        <MantineBreadcrumbs {...props} />
    )
}

Breadcrumbs.extend = MantineBreadcrumbs.extend