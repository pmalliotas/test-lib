import type { Meta, StoryObj } from "@storybook/react"

import { CloseButton } from "./CloseButton"

const meta = {
  title: "Example/CloseButton",
  component: CloseButton,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"]
    }
  },
} satisfies Meta<typeof CloseButton>

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
    // children: "Close Button",
    // size: "xl",
  },
}

// export const Secondary: Story = {
//   args: {
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//   },
// };
