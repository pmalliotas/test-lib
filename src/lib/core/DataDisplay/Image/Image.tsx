import { Image as MantineImage, createPolymorphicComponent } from "@mantine/core"
import { type ImageProps as MantineImageProps } from "@mantine/core"
import { forwardRef } from "react"

export type ImageProps = MantineImageProps & {}

export const Image: React.FC<ImageProps> = createPolymorphicComponent<"img", ImageProps>(forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
    return (
        <MantineImage {...props} ref={ref} />
    )
}))

export default Image