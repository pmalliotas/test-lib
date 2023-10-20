import { Stack as MantineStack } from "@mantine/core"
import { type StackProps as MantineStackProps } from "@mantine/core"

export type StackProps = MantineStackProps & {}

export function Stack(props: StackProps) {

    return (
        <MantineStack {...props} />
    )
}
