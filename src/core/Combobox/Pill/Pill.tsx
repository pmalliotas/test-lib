import { Pill as MantinePill } from "@mantine/core"
import { type PillProps as MantinePillProps } from "@mantine/core"

export type PillProps = MantinePillProps & {}

export function Pill(props: MantinePillProps) {

    return (
        <MantinePill {...props} />
    )
}

export default Pill