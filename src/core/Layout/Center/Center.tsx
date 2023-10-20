import { Center as MantineCenter, createPolymorphicComponent } from "@mantine/core"
import { type CenterProps as MantineCenterProps } from "@mantine/core"
import { forwardRef } from "react"

export type CenterProps = MantineCenterProps & {}

export const Center: React.FC<CenterProps> = createPolymorphicComponent<"div", CenterProps>(forwardRef<HTMLDivElement, CenterProps>((props, ref) => {
    return (
        <MantineCenter {...props} ref={ref} />
    )
}))

