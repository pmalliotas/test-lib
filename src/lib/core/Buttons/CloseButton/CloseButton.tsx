import { CloseButton as MantineCloseButton } from "@mantine/core"
import { type CloseButtonProps as MantineCloseButtonProps } from "@mantine/core"

export type CloseButtonProps = MantineCloseButtonProps & {}

export function CloseButton(props: CloseButtonProps) {

    return (
        <MantineCloseButton {...props} />
    )
}

export default CloseButton