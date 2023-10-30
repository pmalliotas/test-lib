import { Input as MantineInput, createPolymorphicComponent } from "@mantine/core"
import { type InputProps as MantineInputProps } from "@mantine/core"
import { forwardRef } from "react"

export type InputProps = MantineInputProps & {}

export const Input = createPolymorphicComponent<"input", InputProps>(forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <MantineInput {...props} ref={ref} />
    )
}))


