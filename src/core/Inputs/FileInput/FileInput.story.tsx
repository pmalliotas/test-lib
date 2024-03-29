import React from "react"
import { FileInput } from "./FileInput"

export default { title: "FileInput" }

export function Usage() {
  const [value, setValue] = React.useState<File[] | File | null>(null)
  return (
    <div style={{ padding: 40 }}>
      <FileInput
        label="File-Upload"
        placeholder="Pick file"
        value={value}
        onChange={setValue}
        description="This is a description"
      />
    </div>
  )
}

export function Unstyled() {
  const [value, setValue] = React.useState<File[] | File | null>(null)
  return (
    <div style={{ padding: 40 }}>
      <FileInput placeholder="Pick file" value={value} onChange={setValue} unstyled />
    </div>
  )
}

export function Multiple() {
  const [value, setValue] = React.useState<File[] | File | null>([])
  return (
    <div style={{ padding: 40 }}>
      <FileInput placeholder="Multiple" multiple value={value} onChange={setValue} clearable />
    </div>
  )
}
