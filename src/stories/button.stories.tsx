import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonProps } from '../components/button/button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const ButtonDefault = Template.bind({});

ButtonDefault.args = {
  label: 'Button',
};
