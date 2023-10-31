import { Box as MantineBox } from "@mantine/core"
import { type BoxProps as MantineBoxProps } from "@mantine/core"
import { forwardRef } from "react"

export type BoxProps = MantineBoxProps & {}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
    return (
        <MantineBox {...props} ref={ref} />
    )
})