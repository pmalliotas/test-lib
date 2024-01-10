import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import { rem } from "@mantine/core"
import { NOTIFICATION_TYPES, NotificationFactory } from "./Notification"
import { IconAlertCircle, IconAlertTriangle, IconCircleCheck, IconCircleOff, IconInfoCircle } from "@tabler/icons-react"

export const NotificationConfig: ExtendsRootComponent<NotificationFactory> = {
    defaultProps: {
        // color: "transparent",
        p: rem(24),
        styles: {
            closeButton: {
                marginBottom: "auto",
                marginLeft: rem(56),
            }
        },
    },
    // @ts-expect-error - TODO: fix type
    vars: (theme, props) => {
        if (props.type === NOTIFICATION_TYPES.ERROR) {
            return {
                root: {
                    backgroundColor: theme.colors["coral-red"][5],
                    color: "#fff",
                },
                title: {
                    color: "#fff",
                },
                description: {

                },
                closeButton: {

                }
            }
        }
        return { root: {} }
    }
}
