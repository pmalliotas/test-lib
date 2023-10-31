import { Dialog as MantineDialog } from "@mantine/core"
import { type DialogProps as MantineDialogProps } from "@mantine/core"

export type DialogProps = MantineDialogProps & {}

export function Dialog(props: DialogProps) {

    return (
        <MantineDialog {...props} />
    )
}

Dialog.extend = MantineDialog.extend