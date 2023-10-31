import { FocusTrap as MantineFocusTrap } from "@mantine/core"
import { type FocusTrapProps as MantineFocusTrapProps } from "@mantine/core"

export type FocusTrapProps = MantineFocusTrapProps & {}

export function FocusTrap(props: FocusTrapProps) {

    return (
        <MantineFocusTrap {...props} />
    )
}