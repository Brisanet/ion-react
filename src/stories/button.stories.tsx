import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonProps } from '../components/button/button';

export default {
  title: 'Buttons/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const ButtonPrimary = Template.bind({});
export const ButtonSecondary = Template.bind({});
export const ButtonGhost = Template.bind({});
export const ButtonDashed = Template.bind({});

ButtonPrimary.args = {
  label: 'Primary',
  type: 'primary',
  danger: false,
  disabled: false,
};

ButtonSecondary.args = {
  label: 'Secondary',
  type: 'secondary',
  danger: false,
  disabled: false,
};

ButtonGhost.args = {
  label: 'Ghost',
  type: 'ghost',
  danger: false,
  disabled: false,
};

ButtonDashed.args = {
  label: 'Dashed',
  type: 'dashed',
  danger: false,
  disabled: false,
};
