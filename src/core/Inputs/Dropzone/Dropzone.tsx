import * as React from "react"
import classes from "./Dropzone.module.css"

import { Dropzone as MantineDropzone } from "@mantine/dropzone"
import { type DropzoneProps as MantineDropzoneProps } from "@mantine/dropzone"
import { rem } from "@mantine/core"
import { IconUpload, IconX } from "@tabler/icons-react"
import { Stack } from "../../Layout"
import { Text } from "../../Typography"

export type DropzoneProps = MantineDropzoneProps & {}

export function Dropzone(props: DropzoneProps) {
    const openRef = React.useRef<() => void>(null)

    return (
        <Stack c={props.disabled ? "silver-sand" : "cool-grey"} gap="0.5rem">
            <Text>File-Upload</Text>
            <MantineDropzone
                classNames={{
                    root: classes.root,
                }}
                {...props}
                openRef={openRef}
                activateOnClick={false}
            >
                <Stack align="center" justify="center" gap="lg" miw={rem(280)} mih={rem(185)} style={{ pointerEvents: "none" }}>
                    <MantineDropzone.Accept>
                        <IconUpload
                            style={{ width: "2rem", height: "2rem", color: "var(--mantine-color-fresh-sky-blue-6)" }}
                            stroke={1.5}
                        />
                    </MantineDropzone.Accept>
                    <MantineDropzone.Reject>
                        <IconX
                            style={{ width: "2rem", height: "2rem", color: "var(--mantine-color-coral-red-6)" }}
                            stroke={1.5}
                        />
                    </MantineDropzone.Reject>
                    <MantineDropzone.Idle>
                        <IconUpload
                            style={{
                                width: "2rem", height: "2rem",
                                color: props.disabled ? "var(--mantine-color-silver-sand-5)" : "var(--mantine-color-cool-grey-5)"
                            }}
                            stroke={1.5}
                        />
                    </MantineDropzone.Idle>

                    <Stack justify="center" gap="0.5rem">
                        <Text
                            inline
                            style={{
                                color: props.disabled ? "var(--mantine-color-silver-sand-5)" : "var(--mantine-color-cool-grey-5)"
                            }}
                        >
                            Drag files here to upload
                        </Text>
                        <Text
                            onClick={() => openRef.current?.()}
                            style={{
                                pointerEvents: "all",
                                textAlign: "center",
                                textDecoration: "underline",
                                textUnderlineOffset: rem(6),
                                cursor: props.disabled ? "default" : "pointer",
                                color: props.disabled ? "var(--mantine-color-silver-sand-5)" : "var(--mantine-color-majorelle-blue-5)"
                            }}
                        >
                            or browse for files
                        </Text>
                    </Stack>
                </Stack>
            </MantineDropzone>
        </Stack>
    )
}

Dropzone.FullScreen = MantineDropzone.FullScreen
Dropzone.Accept = MantineDropzone.Accept
Dropzone.Reject = MantineDropzone.Reject
Dropzone.Idle = MantineDropzone.Idle

Dropzone.extend = MantineDropzone.extend