import type { Meta, StoryObj } from "@storybook/react"
import { Icon12Hours } from "@tabler/icons-react"

import { ActionIcon } from "./ActionIcon"

const meta = {
  title: "Example/ActionIcon",
  component: ActionIcon,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: {
    //   control: "color"
    // },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    // disabled: {
    //   control: "select",
    //   options: [true, false],
    // },
    variant: {
      control: "select",
      options: ["filled", "light", "outline", "transparent", "white", "subtle", "default", "gradient"],
    },
  },
} satisfies Meta<typeof ActionIcon>

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
    children: <Icon12Hours />,
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
