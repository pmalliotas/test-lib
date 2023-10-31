import { NativeSelect as MantineNativeSelect } from "@mantine/core"
import { type NativeSelectProps as MantineNativeSelectProps } from "@mantine/core"

export type NativeSelectProps = MantineNativeSelectProps & {}

export function NativeSelect(props: NativeSelectProps) {

    return (
        <MantineNativeSelect {...props} />
    )
}

NativeSelect.extend = MantineNativeSelect.extend