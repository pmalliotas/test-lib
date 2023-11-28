import * as React from "react"

import { Rating as MantineRating } from "@mantine/core"
import { type RatingProps as MantineRatingProps } from "@mantine/core"

export type RatingProps = MantineRatingProps & {}
export function Rating(props: RatingProps) {

    return (
        <MantineRating {...props} />
    )
}

Rating.extend = MantineRating.extend
