import { Pill as MantinePill } from "@mantine/core"
import { type PillProps as MantinePillProps } from "@mantine/core"

export function Pill(props: MantinePillProps) {

    return (
        <MantinePill {...props} />
    )
}

export type PillProps = MantinePillProps