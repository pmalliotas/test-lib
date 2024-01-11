import React from "react"
import { PasswordInput } from "./PasswordInput"

export default { title: "PasswordInput" }

export function Usage() {
  return (
    <div data-disabled style={{ display: "flex", flexDirection: "column", rowGap: "2rem" }}>
      <PasswordInput placeholder="Your password" description="Enter you password" label="Your password" />
      <PasswordInput disabled placeholder="Your password" label="Your password" />
    </div>
  )
}