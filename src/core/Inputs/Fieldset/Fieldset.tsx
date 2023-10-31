import { Fieldset as MantineFieldset } from "@mantine/core"
import { type FieldsetProps as MantineFieldsetProps } from "@mantine/core"

export type FieldsetProps = MantineFieldsetProps & {}

export function Fieldset(props: FieldsetProps) {

    return (
        <MantineFieldset {...props} />
    )
}

Fieldset.extend = MantineFieldset.extend