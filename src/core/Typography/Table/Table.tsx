import * as React from "react"

import { Table as MantineTable } from "@mantine/core"
import { type TableProps as MantineTableProps } from "@mantine/core"

export type TableProps = MantineTableProps & {}

export function Table(props: TableProps) {

    return (
        <MantineTable {...props} />
    )
}

Table.Caption = MantineTable.Caption
Table.Tbody = MantineTable.Tbody
Table.Td = MantineTable.Td
Table.Tfoot = MantineTable.Tfoot
Table.Th = MantineTable.Th
Table.Thead = MantineTable.Thead
Table.Tr = MantineTable.Tr
Table.ScrollContainer = MantineTable.ScrollContainer

Table.extend = MantineTable.extend