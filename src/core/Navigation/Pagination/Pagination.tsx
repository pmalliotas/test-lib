import { Pagination as MantinePagination } from "@mantine/core"
import { type PaginationProps as MantinePaginationProps } from "@mantine/core"

export type PaginationProps = MantinePaginationProps & {}

export function Pagination(props: PaginationProps) {

    return (
        <MantinePagination {...props} />
    )
}

Pagination.Control = MantinePagination.Control
Pagination.Dots = MantinePagination.Dots
Pagination.First = MantinePagination.First
Pagination.Items = MantinePagination.Items
Pagination.Last = MantinePagination.Last
Pagination.Previous = MantinePagination.Previous
Pagination.Next = MantinePagination.Next
Pagination.Root = MantinePagination.Root

Pagination.extend = MantinePagination.extend