import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The type of button',
      control: 'select',
    },
    color: {
      description: 'Color theme of the button',
      control: 'select',
    },
    disabled: {
      description: 'Disable the button',
      control: 'boolean',
    },
    children: {
      description: 'The content of the button',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: { variant: 'solid', color: 'primary', children: 'Solid' },
};

export const Accent: Story = {
  args: { variant: 'outline', color: 'accent', children: 'Accent' },
};

export const Warinng: Story = {
  args: { variant: 'solid', color: 'warning', children: 'Warning' },
};
