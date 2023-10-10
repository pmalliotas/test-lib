import { Blockquote as MantineBlockquote } from "@mantine/core"
import { type BlockquoteProps as MantineBlockquoteProps } from "@mantine/core"

export type BlockquoteProps = MantineBlockquoteProps & {}

export function Blockquote(props: BlockquoteProps) {

    return (
        <MantineBlockquote {...props} />
    )
}
