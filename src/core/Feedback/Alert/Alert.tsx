import * as React from "react"

import { Alert as MantineAlert } from "@mantine/core"
import { type AlertProps as MantineAlertProps } from "@mantine/core"

export type AlertProps = MantineAlertProps & {}

export function Alert(props: AlertProps) {

    return (
        <MantineAlert {...props} />
    )
}

Alert.extend = MantineAlert.extend

export default Alert
