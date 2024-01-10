import * as React from "react"
import classes from "./FileInput.module.css"

import { FileInput as MantineFileInput } from "@mantine/core"
import { type FileInputProps as MantineFileInputProps } from "@mantine/core"
import { Button } from "../../Buttons"
import { IconUpload } from "@tabler/icons-react"
import { PillGroup, Pill } from "../../Combobox"

export type FileInputProps = MantineFileInputProps<boolean> & {
}

export function FileInput(props: FileInputProps) {
    const fileInputRef = React.useRef<HTMLButtonElement>(null)

    return (
        <MantineFileInput
            classNames={{
                label: props.disabled ? classes.labelDisabled : classes.labelEnabled,
                input: classes.input,
                root: classes.root,
                description: classes.description,
                section: classes.section,
                wrapper: classes.wrapper
            }}
            ref={fileInputRef}
            size="md"
            inputWrapperOrder={["label", "input", "description", "error"]}
            rightSection={<Button onClick={() => fileInputRef.current?.click()} leftSection={<IconUpload />} color="eerie-black" w="10rem">Upload</Button>}
            valueComponent={ValueComponent}
            {...props}
        />
    )
}


const ValueComponent: FileInputProps["valueComponent"] = ({ value }) => {
    if (value === null) {
        return null
    }

    if (Array.isArray(value)) {
        return (
            <PillGroup>
                {value.map((file, index) => (
                    <Pill key={index} withRemoveButton>{file.name}</Pill>
                ))}
            </PillGroup>
        )
    }

    return <Pill withRemoveButton>{value.name}</Pill>
}