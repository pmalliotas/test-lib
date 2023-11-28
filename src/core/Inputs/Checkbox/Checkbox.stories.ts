import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./Checkbox"

const meta = {
    title: "Example/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        size: {
            description: "Sizes",
            defaultValue: "md",
            control: {
                type: "select",
            },
            options: ["xs", "sm", "md", "lg", "xl"],
        }
    },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {

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
