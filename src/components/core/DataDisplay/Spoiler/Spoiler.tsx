import { Spoiler as MantineSpoiler } from "@mantine/core"
import { type SpoilerProps as MantineSpoilerProps } from "@mantine/core"

export type SpoilerProps = MantineSpoilerProps & {}

export function Spoiler(props: SpoilerProps) {

    return (
        <MantineSpoiler {...props} />
    )
}