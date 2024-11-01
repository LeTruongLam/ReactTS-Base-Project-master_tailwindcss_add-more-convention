import type { Meta, StoryObj } from '@storybook/react'

import { Button, variants } from './Button'
import CaretCircleRight from './icons/CaretCircleRight'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Monito Pets/Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: Object.keys(variants.variant),
      control: { type: 'select' },
      description: 'The variant of the button',
    },
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      control: {
        type: 'select',
      },
      options: ['Text', 'Text with Icon right', 'Text with Icon left'],
      mapping: {
        Text: 'Default',
        'Text with Icon right': (
          <>
            <span>Default</span>
            <CaretCircleRight />
          </>
        ),
        'Text with Icon left': (
          <>
            <CaretCircleRight />
            <span>Default</span>
          </>
        ),
      },
      description: 'The content of the button',
    },
    asChild: {
      type: 'boolean',
      description:
        'Merges its props onto its immediate child. Useful for wrapping components.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    variant: 'default',
    children: 'Text with Icon right',
    asChild: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    children: 'Disabled',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const RoundedFull: Story = {
  args: {
    variant: 'roundedFull',
    children: <CaretCircleRight />,
  },
}
