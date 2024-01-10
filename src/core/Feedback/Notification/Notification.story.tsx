import React from "react"
import {
  IconCircleCheck,
} from "@tabler/icons-react"
import { NOTIFICATION_TYPES, Notification } from "./Notification"

export default { title: "Notification" }

export function SingleNotification() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Notification onClose={() => { }} title="Notification title">
        Notification body
      </Notification>
    </div>
  )
}

export function Usage() {
  return (
    <div style={{ padding: 60 }}>
      <div style={{ maxWidth: 400, marginLeft: "auto", marginRight: "auto" }}>

        <Notification
          type={NOTIFICATION_TYPES.SUCCESS}
          onClose={() => { }}
          mt="xl"
          title="Success-heading"
        >
          Success toast message content here
        </Notification>

        <Notification
          type={NOTIFICATION_TYPES.ERROR}
          onClose={() => { }}
          mt="xl"
          title="Error-heading"
        >
          Error toast message content here
        </Notification>

        <Notification
          type={NOTIFICATION_TYPES.INFO}
          onClose={() => { }}
          mt="xl"
          icon={<IconCircleCheck size={64} />}
          title="Info-heading"
        >
          Info toast message content here
        </Notification>

        <Notification
          type={NOTIFICATION_TYPES.WARNING}
          onClose={() => { }}
          mt="xl"
          title="Warning-heading"
        >
          Warning toast message content here
        </Notification>

        <Notification onClose={() => { }} mt="xl" title="Primary notification">
          You have achieved something important
        </Notification>
      </div>
    </div >
  )
}