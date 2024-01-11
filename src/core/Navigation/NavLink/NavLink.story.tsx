import React from "react"
import { IconChevronRight, IconHome2 } from "@tabler/icons-react"
import { NavLink } from "./NavLink"

export default { title: "NavLink" }

export function SingleButton() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink
        label="Navigation link"
        description="Some description here"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link"
        description="Some description here"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
    </div>
  )
}

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink
        label="Navigation link"
        description="Some description here"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link with label text overflow"
        description="And with description text overflow"
        noWrap
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Thislabelissolongthatitoverflowsitscontainernotnice"
        description="Thislabelissolongthatitoverflowsitscontainernotnice"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link"
        description="Some description here"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
      <NavLink
        label="Navigation link"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
      />
      <NavLink
        label="Navigation link"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
      <NavLink
        label="Navigation link"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        color="pale-violet"
        variant="filled"
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
      <NavLink
        label="Navigation link"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        color="pale-violet"
        variant="subtle"
        rightSection={<IconChevronRight size={16} stroke={1.5} />}
        active
      />
    </div>
  )
}

export function WithNestedItems() {
  return (
    <div style={{ padding: 40, maxWidth: 320 }}>
      <NavLink label="With nested links 1" leftSection={<IconHome2 size={16} stroke={1.5} />}>
        <NavLink label="Child link 1" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 2" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 3" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Second layer" leftSection={<IconHome2 size={16} stroke={1.5} />}>
          <NavLink label="Child link 1" leftSection={<IconHome2 size={16} stroke={1.5} />} />
          <NavLink label="Child link 2" leftSection={<IconHome2 size={16} stroke={1.5} />} />
          <NavLink label="Child link 3" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        </NavLink>
      </NavLink>
      <NavLink
        label="With nested links 2"
        leftSection={<IconHome2 size={16} stroke={1.5} />}
        disableRightSectionRotation
        childrenOffset={0}
      >
        <NavLink label="Child link 1" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 2" leftSection={<IconHome2 size={16} stroke={1.5} />} />
        <NavLink label="Child link 3" leftSection={<IconHome2 size={16} stroke={1.5} />} />
      </NavLink>
    </div>
  )
}