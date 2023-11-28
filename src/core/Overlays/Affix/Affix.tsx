import * as React from "react"

import { Affix as MantineAffix } from "@mantine/core"
import { type AffixProps as MantineAffixProps } from "@mantine/core"

export type AffixProps = MantineAffixProps & {}

export function Affix(props: AffixProps) {

    return (
        <MantineAffix {...props} />
    )
}

Affix.extend = MantineAffix.extend