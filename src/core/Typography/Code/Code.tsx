import { Code as MantineCode } from "@mantine/core"
import { type CodeProps as MantineCodeProps } from "@mantine/core"

export type CodeProps = MantineCodeProps & {}

export function Code(props: CodeProps) {

    return (
        <MantineCode {...props} />
    )
}

Code.extend = MantineCode.extend