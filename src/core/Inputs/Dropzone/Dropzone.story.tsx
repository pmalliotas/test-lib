import React from "react"
import { Dropzone } from "./index"

export default { title: "Dropzone" }

export function Usage() {
  return (
    <div style={{ padding: 40, display: "flex", flexDirection: "column", rowGap: "2rem" }}>
      <Dropzone onDrop={console.log} accept={["image/jpeg", "image/png"]} role="button">
        <div>Drag and drop files</div>
      </Dropzone>

      <Dropzone disabled onDrop={console.log} accept={["image/jpeg", "image/png"]} role="button">
        <div>Drag and drop files</div>
      </Dropzone>
    </div>
  )
}