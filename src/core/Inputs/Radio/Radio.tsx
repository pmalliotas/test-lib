import { Radio as MantineRadio, RadioGroup as MantineRadioGroup } from "@mantine/core"
import { type RadioProps as MantineRadioProps, type RadioGroupProps as MantineRadioGroupProps } from "@mantine/core"

export type RadioProps = MantineRadioProps & {}
export type RadioGroupProps = MantineRadioGroupProps & {}

export function Radio(props: RadioProps) {

    return (
        <MantineRadio {...props} />
    )
}

Radio.Group = MantineRadio.Group
Radio.extend = MantineRadio.extend

export function RadioGroup(props: RadioGroupProps) {

    return (
        <MantineRadioGroup {...props} />
    )
}

RadioGroup.extend = MantineRadioGroup.extend