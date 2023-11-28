import * as React from "react"

import { ImageFactory, Image as MantineImage, polymorphicFactory } from "@mantine/core"
import { type ImageProps as MantineImageProps } from "@mantine/core"

export type ImageProps = MantineImageProps & {}

type ImageType = ImageFactory & {
    props: ImageProps
}

export const Image = polymorphicFactory<ImageType>(((props, ref) => {
    return (
        <MantineImage {...props} ref={ref} />
    )
}))

Image.extend = MantineImage.extend

export default Image