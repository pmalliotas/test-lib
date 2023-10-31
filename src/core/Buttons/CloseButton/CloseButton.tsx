import { CloseButton as MantineCloseButton } from "@mantine/core"
import { type CloseButtonProps as MantineCloseButtonProps } from "@mantine/core"

export type CloseButtonProps = MantineCloseButtonProps & {}

export function CloseButton(props: CloseButtonProps) {

    return (
        <MantineCloseButton {...props} />
    )
}

CloseButton.extend = MantineCloseButton.extend

export default CloseButton