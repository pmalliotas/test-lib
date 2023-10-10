import { Notification as MantineNotification } from "@mantine/core"
import { type NotificationProps as MantineNotificationProps } from "@mantine/core"

export type NotificationProps = MantineNotificationProps & {}

export function Notification(props: NotificationProps) {

    return (
        <MantineNotification {...props} />
    )
}
