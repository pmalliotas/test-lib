import { AspectRatio as MantineAspectRatio } from "@mantine/core"
import { type AspectRatioProps as MantineAspectRatioProps } from "@mantine/core"

export type AspectRatioProps = MantineAspectRatioProps & {}

export function AspectRatio(props: AspectRatioProps) {

    return (
        <MantineAspectRatio {...props} />
    )
}

AspectRatio.extend = MantineAspectRatio.extend