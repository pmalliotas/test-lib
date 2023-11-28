import * as React from "react"

import { BackgroundImageFactory, BackgroundImage as MantineBackgroundImage, polymorphicFactory } from "@mantine/core"
import { type BackgroundImageProps as MantineBackgroundImageProps } from "@mantine/core"

export type BackgroundImageProps = MantineBackgroundImageProps & {}

type BackgroundImageType = BackgroundImageFactory & {
    props: BackgroundImageProps
}

export const BackgroundImage = polymorphicFactory<BackgroundImageType>(((props, ref) => {
    return (
        <MantineBackgroundImage {...props} ref={ref} />
    )
}))

BackgroundImage.extend = MantineBackgroundImage.extend

export default BackgroundImage