import { Card as MantineCard, createPolymorphicComponent } from "@mantine/core"
import { type CardProps as MantineCardProps } from "@mantine/core"
import { forwardRef } from "react"

export type CardProps = MantineCardProps & {}

export const Card: React.FC<CardProps> = createPolymorphicComponent<"div", CardProps>(forwardRef<HTMLDivElement, CardProps>((props, ref) => {
    return (
        <MantineCard {...props} ref={ref} />
    )
}))

export default Card