import type { Meta, StoryObj } from "@storybook/react"
import { Icon12Hours } from "@tabler/icons-react"

import { Button } from "./Button"

const meta = {
  title: "Example/Button",
  component: Button,
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
    leftSection: {
      control: "select",
      options: {
        "Icon 12 Hours": <Icon12Hours />
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // primary: true,
    children: "Button",
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
