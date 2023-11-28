import { InputFactory, Input as MantineInput, polymorphicFactory } from "@mantine/core"
import { type InputProps as MantineInputProps } from "@mantine/core"

export type InputProps = MantineInputProps & {}

type InputType = InputFactory & {
    props: InputProps
}

export const Input = polymorphicFactory<InputType>(((props, ref) => {
    return (
        <MantineInput
            {...props}
            ref={ref}
        />
    )
}))

Input.extend = MantineInput.extend