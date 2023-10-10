import { TagsInput as MantineTagsInput } from "@mantine/core"
import { type TagsInputProps as MantineTagsInputProps } from "@mantine/core"

export function TagsInput(props: MantineTagsInputProps) {

    return (
        <MantineTagsInput {...props} />
    )
}

export type TagsInputProps = MantineTagsInputProps