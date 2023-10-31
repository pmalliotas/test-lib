import { Timeline as MantineTimeline } from "@mantine/core"
import { type TimelineProps as MantineTimelineProps } from "@mantine/core"

export type TimelineProps = MantineTimelineProps & {}

export function Timeline(props: TimelineProps) {

    return (
        <MantineTimeline {...props} />
    )
}

Timeline.Item = MantineTimeline.Item
Timeline.extend = MantineTimeline.extend

export default Timeline