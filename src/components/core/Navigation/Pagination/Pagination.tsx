import { Pagination as MantinePagination } from "@mantine/core"
import { type PaginationProps as MantinePaginationProps } from "@mantine/core"

export type PaginationProps = MantinePaginationProps & {}

export function Pagination(props: PaginationProps) {

    return (
        <MantinePagination {...props} />
    )
}
