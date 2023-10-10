import { BackgroundImage as MantineBackgroundImage, createPolymorphicComponent } from "@mantine/core"
import { type BackgroundImageProps as MantineBackgroundImageProps } from "@mantine/core"
import { forwardRef } from "react"

export type BackgroundImageProps = MantineBackgroundImageProps & {}

export const BackgroundImage = createPolymorphicComponent<"div", BackgroundImageProps>(forwardRef<HTMLDivElement, BackgroundImageProps>((props, ref) => {
    return (
        <MantineBackgroundImage {...props} ref={ref} />
    )
}))
