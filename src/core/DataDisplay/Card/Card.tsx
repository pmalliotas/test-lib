import { CardFactory, Card as MantineCard, polymorphicFactory } from "@mantine/core"
import { type CardProps as MantineCardProps } from "@mantine/core"

export type CardProps = MantineCardProps & {}

type CardType = CardFactory & {
    props: CardProps
}
export const Card = polymorphicFactory<CardType>(((props, ref) => {
    return (
        <MantineCard {...props} ref={ref} />
    )
}))

Card.extend = MantineCard.extend

export default Card