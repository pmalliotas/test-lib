import * as React from "react"

import { Skeleton as MantineSkeleton } from "@mantine/core"
import { type SkeletonProps as MantineSkeletonProps } from "@mantine/core"

export type SkeletonProps = MantineSkeletonProps & {}
export function Skeleton(props: SkeletonProps) {

    return (
        <MantineSkeleton {...props} />
    )
}

Skeleton.extend = MantineSkeleton.extend

export default Skeleton