import { Space as MantineSpace } from "@mantine/core"
import { type SpaceProps as MantineSpaceProps } from "@mantine/core"

export type SpaceProps = MantineSpaceProps & {}

export function Space(props: SpaceProps) {

    return (
        <MantineSpace {...props} />
    )
}

Space.extend = MantineSpace.extend