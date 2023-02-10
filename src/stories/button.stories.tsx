import { ComponentStory, ComponentMeta } from '@storybook/react';

import IonButton, { ButtonProps } from '../components/button/button';

export default {
  title: 'Buttons/Button',
  component: IonButton,
} as ComponentMeta<typeof IonButton>;

const Template: ComponentStory<typeof IonButton> = (args: ButtonProps) => (
  <IonButton {...args} />
);

export const ButtonPrimary = Template.bind({});
export const ButtonSecondary = Template.bind({});
export const ButtonGhost = Template.bind({});
export const ButtonDashed = Template.bind({});

export const PrimaryDisabled = Template.bind({});

export const PrimaryDanger = Template.bind({});

// Button types
ButtonPrimary.args = {
  label: 'Primary',
  type: 'primary',
  disabled: false,
};
ButtonSecondary.args = {
  label: 'Secondary',
  type: 'secondary',
  disabled: false,
};
ButtonGhost.args = {
  label: 'Ghost',
  type: 'ghost',
  disabled: false,
};
ButtonDashed.args = {
  label: 'Dashed',
  type: 'dashed',
  disabled: false,
};

// Button disabled
PrimaryDisabled.args = {
  label: 'Primary',
  type: 'primary',
  disabled: true,
  isDanger: true,
};

//Button danger
PrimaryDanger.args = {
  label: 'Primary',
  type: 'primary',
  isDanger: true,
};
