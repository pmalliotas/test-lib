import * as React from "react"

import { TagsInput as MantineTagsInput } from "@mantine/core"
import { type TagsInputProps as MantineTagsInputProps } from "@mantine/core"

export type TagsInputProps = MantineTagsInputProps & {}

export function TagsInput(props: MantineTagsInputProps) {

    return (
        <MantineTagsInput {...props} />
    )
}

TagsInput.extend = MantineTagsInput.extend

export default TagsInput