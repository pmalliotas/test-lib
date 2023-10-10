import { FileButton as MantineFileButton } from "@mantine/core"
import { type FileButtonProps as MantineFileButtonProps } from "@mantine/core"

export function FileButton(props: MantineFileButtonProps) {

    return (
        <MantineFileButton {...props} />
    )
}

export type FileButtonProps = MantineFileButtonProps