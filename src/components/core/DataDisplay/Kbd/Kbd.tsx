import { Kbd as MantineKbd } from "@mantine/core"
import { type KbdProps as MantineKbdProps } from "@mantine/core"

export type KbdProps = MantineKbdProps & {}

export function Kbd(props: KbdProps) {

    return (
        <MantineKbd {...props} />
    )
}

export default Kbd