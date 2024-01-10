import * as React from "react"

import { Notification as MantineNotification } from "@mantine/core"
import { type NotificationProps as MantineNotificationProps } from "@mantine/core"
import { type NotificationFactory as MantineNotificationFactory } from "@mantine/core"

import classes from "./Notification.module.css"
import { IconAlertCircle, IconAlertTriangle, IconCircleCheck, IconCircleOff, IconInfoCircle } from "@tabler/icons-react"

export enum NOTIFICATION_TYPES {
    INFO = "INFO",
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    ERROR = "ERROR",
}

export type NotificationFactory = MantineNotificationFactory & {
    props: NotificationProps
}

export type NotificationProps = MantineNotificationProps & {
    type?: NOTIFICATION_TYPES
}

export function Notification(props: NotificationProps) {

    switch (props.type) {
        case NOTIFICATION_TYPES.SUCCESS:
            return (
                <MantineNotification
                    classNames={{
                        root: classes.rootSuccess,
                        title: classes.titleSuccess,
                        description: classes.descriptionSuccess,
                        closeButton: classes.closeButtonSuccess,
                    }}
                    {...props}
                    icon={<IconCircleCheck size={128} />}
                />
            )
        case NOTIFICATION_TYPES.ERROR:
            return (
                <MantineNotification
                    classNames={{
                        root: classes.rootError,
                        title: classes.titleError,
                        description: classes.descriptionError,
                        closeButton: classes.closeButtonError,
                    }}
                    {...props}
                />
            )
        case NOTIFICATION_TYPES.WARNING:
            return (
                <MantineNotification
                    classNames={{
                        root: classes.rootWarning,
                        title: classes.titleWarning,
                        description: classes.descriptionWarning,
                        closeButton: classes.closeButtonWarning,
                    }}
                    {...props}
                    icon={<IconAlertTriangle />}
                />
            )
        case NOTIFICATION_TYPES.INFO:
            return (
                <MantineNotification
                    classNames={{
                        root: classes.rootInfo,
                        title: classes.titleInfo,
                        description: classes.descriptionInfo,
                        closeButton: classes.closeButtonInfo,
                    }}
                    {...props}
                    icon={<IconInfoCircle />}
                />
            )
    }

    return (
        <MantineNotification {...props} />
    )
}

Notification.extend = MantineNotification.extend

export default Notification