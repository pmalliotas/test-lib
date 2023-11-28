import * as React from "react"

import { Title as MantineTitle } from "@mantine/core"
import { type TitleProps as MantineTitleProps } from "@mantine/core"

export type TitleProps = MantineTitleProps & {}

export function Title(props: TitleProps) {

    return (
        <MantineTitle {...props} />
    )
}

Title.extend = MantineTitle.extend