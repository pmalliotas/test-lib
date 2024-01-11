import * as React from "react"
import classes from "./Radio.module.css"

import { Radio as MantineRadio } from "@mantine/core"
import { type RadioProps as MantineRadioProps } from "@mantine/core"

export type RadioProps = MantineRadioProps & {}

export function Radio(props: RadioProps) {

    return (
        <MantineRadio
            classNames={{
                radio: classes.radio,
                icon: classes.icon,
                root: classes.root,
                body: classes.body,
            }}
            variant="outline"
            {...props}
        />
    )
}

Radio.Group = MantineRadio.Group
Radio.extend = MantineRadio.extend

export { RadioGroup, type RadioGroupProps } from "@mantine/core"