import { Burger as MantineBurger } from "@mantine/core"
import { type BurgerProps as MantineBurgerProps } from "@mantine/core"

export type BurgerProps = MantineBurgerProps & {}

export function Burger(props: BurgerProps) {

    return (
        <MantineBurger {...props} />
    )
}
