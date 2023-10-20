import { SegmentedControl as MantineSegmentedControl } from "@mantine/core"
import { type SegmentedControlProps as MantineSegmentedControlProps } from "@mantine/core"

export type SegmentedControlProps = MantineSegmentedControlProps & {}

export function SegmentedControl(props: SegmentedControlProps) {

    return (
        <MantineSegmentedControl {...props} />
    )
}
